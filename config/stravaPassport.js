let passport = require('passport');

let StravaStrategy = require('passport-strava-oauth2').Strategy;

let User = require('../models/user');

// new code below
passport.use(new StravaStrategy({
    clientID: process.env.STRAVA_CLIENT_ID,
    clientSecret: process.env.STRAVA_SECRET,
    callbackURL: process.env.STRAVA_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({stravaId: profile.id}, function(err, user) {
        if(err) return cb(err);
        if (user) {
          // returning user
          console.log('user exist');
          console.log(accessToken)
          return cb(null, user);
        } else {
          // new student via OAuth
          console.log('new bleh created');
          console.log(accessToken, refreshToken)
          console.log(profile);
          let newUser = new User({
            stravaName: profile.displayName,
            resourceState: profile._json.resource_state,
            stravaId: profile._json.id,
            sAvatar: profile.profile_medium,
            units: profile.measurement_preference
          });
          newUser.save(function(err){
            if(err) return cb(err);
            return cb(null, newUser)
          })
        }
      });
    }));

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    })
  })