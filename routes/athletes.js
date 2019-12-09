ar express = require('express');
var router = express.Router();
let accountsCtrl = require('../controllers/teams')

router.get('/:id', teamsCtrl.show)