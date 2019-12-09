var express = require('express');
var router = express.Router();
let passport = require('passport')
let accountsCtrl = require('../controllers/accounts')

router.use (isLoggedIn)
/* GET home page. */
router.get('/accounts',  accountsCtrl.index);
router.get('/tmforms', accountsCtrl.tmform);
router.get('/tmedit/:id', accountsCtrl.tmedit)
router.post('/accounts', accountsCtrl.crtTeam)
router.delete('/accounts/:id', accountsCtrl.delete)
router.put('/accounts/:id', accountsCtrl.update)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  

module.exports = router;