var express = require('express');
var router = express.Router();

//LOGGER SETTING
const logger=require('../configurations/logConfiguration');

router.get('/',function(req, res, next) {
    res.sendFile(__dirname+"/public/main.html")
});

module.exports = router;
