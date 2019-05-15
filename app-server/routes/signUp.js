 var express = require('express')
 var app = express()
 var router = express.Router()
 
 // DATABASE SETTING 
var connection=require('./dbConnection');
router.get('/',function(req, res, next) {

    var query = connection.query('select * from signup',
    function(err,rows){
        if(rows){
            res.send(rows)
        }
        else{
            console.log("now rows")

        }
        
    })

router.post('/', function(req, res){

    var body = req.body;
    var signup = {
        'UserID' : req.body.UserID,
        'UserName' : req.body.UserName,
        'UserEmail' : req.body.UserEmail,
        'UserPhoneNumber' : req.body.UserPhoneNumber,
        'UserGender' : req.body.UserGender,
        'UserBigcity' : req.body.UserBigcity    
};
        //execute sql
        connection.query("INSERT INTO thread set ?", signup,
        function (error, result, fields){

            if(error){
                //에러 발생시
                res.send('err : ' + error)
            }
            else {
                //execution success
                
                res.send('success create signup');   
            }
        })  
})
})

 module.exports = router;
