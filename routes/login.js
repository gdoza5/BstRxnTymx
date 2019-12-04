const express = require('express');
const passport = require('passport');

const router = express.Router();


router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login in with Strava' });
  });


router.get('/auth/strava', passport.authenticate(
    
    'strava',
    { scope: ['read,activity:read_all,profile:read_all,profile:write'] }
  ),
  function(req, res){

  });
  
  router.get('/auth/strava/callback', passport.authenticate(
    'strava',
    {
      successRedirect: '/',
      failureRedirect: '/error'
    }
  ));
  
  router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/')
  }); 
  
  
  
  module.exports = router;