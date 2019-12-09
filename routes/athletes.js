var express = require('express');
var router = express.Router();
let athletesCtrl = require('../controllers/athletes')

router.use (isLoggedIn)


router.get('/athlforms/:id', athletesCtrl.athlForms)
router.post('/athlforms/:id', athletesCtrl.crtAthl)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;