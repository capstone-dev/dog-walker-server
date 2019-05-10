var express = require('express');
var router = express.Router();

//LOGGER SETTING
const logger=require('../configurations/logConfiguration');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
