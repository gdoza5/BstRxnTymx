var express = require('express');
var router = express.Router();
let athletesCtrl = require('../controllers/athletes')




router.get('/athlforms/:id', athletesCtrl.athlForms)
router.post('/athlforms/:id', athletesCtrl.crtAthl)


module.exports = router;