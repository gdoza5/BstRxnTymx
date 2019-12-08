var express = require('express');
var router = express.Router();
let accountsCtrl = require('../controllers/accounts')


/* GET home page. */
router.get('/accounts', accountsCtrl.index);
router.get('/tmforms', accountsCtrl.tmform);
router.get('/tmedit/:id', accountsCtrl.tmedit)
router.post('/accounts', accountsCtrl.crtTeam)
router.delete('/accounts/:id', accountsCtrl.delete)
router.put('/accounts/:id', accountsCtrl.update)


module.exports = router;