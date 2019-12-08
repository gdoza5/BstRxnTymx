var express = require('express');
var router = express.Router();
let passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SundayPL' });
});

// Google Oauth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile','email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/accounts',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logOut();
  res.redirect('/')
}); 



module.exports = router;
