let passport = require('passport');

let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

let User = require('../models/user');
let Athlete = require('../models/athlete')

// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
  User.findOne({googleId: profile.id}, function(err, user) {
    if(err) return cb(err);
    if (user) {
      // returning user
      console.log('user exist');
      return cb(null, user);
    } else {
      // new user via OAuth
      console.log('new user created');
      console.log(profile);
      let newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatar: profile.photos[0].value
      });
      newUser.save(function(err){
        if(err) return cb(err);
        return cb(null, newUser);
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