var express = require('express');
var router = express.Router();

//LOGGER SETTING
const logger=require('../configurations/logConfiguration');

router.get('/',function(req, res, next) {
    res.sendFile(__dirname+"../views/main.html")
});

module.exports = router;