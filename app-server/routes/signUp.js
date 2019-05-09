var express = require('express')
var router = express.Router()

// DATABASE SETTING
var connection=require('./dbConnection');


router.get('/',function(req, res, next) {

    //test용 데이터
    var testData= {
        "UserID": "summy",
        "UserPassword":"1234",
        "UserName": "수미",
        "UserEmail": "abcd@naver.com",
        "UserNumber": parseFloat("01012345678"),
        "UserGender": "여",
        "UserBigcity": "서울"
    };
res.send(testData);

})


router.post('/', function(req, res){

})



module.exports = router;