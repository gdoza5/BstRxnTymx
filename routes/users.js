var express = require('express');
var router = express.Router();
let usersCtrl = require('../controllers/users')

/* GET users listing. goes to accounts.ejs*/
router.get('/users', usersCtrl.index)
router.delete('/:id', usersCtrl.delete)



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
