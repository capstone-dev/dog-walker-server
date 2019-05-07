var express = require('express')
var router = express.Router()

// DATABASE SETTING
var connection=require('./dbConnection');

router.get('/',function(req, res, next) {
    var query = connection.query('select * from thread',
        function (err, rows) {
            if (err) throw err;

            if (rows) {
                res.send(rows)
            } else {
                console.log("no rows")
            }
        })

})

    router.post('/', function(req, res){
        var body = req.body;
        var userThread = {
            'userId' : req.body.userId,
            'threadTitle' : req.body.threadTitle,
            'userLocation' : req.body.userLocation,
            'threadNumber' : req.body.threadNumber,
            'threadContent' : req.body.threadContent,
            'chatroomUserName' : req.body.chatroomUserName
        };
        //execute sql
        connection.query("INSERT INTO thread set ?", userThread,
            function (error, result, fields){

                if(error){
                    //에러 발생시
                    res.send('err : ' + error)
                }
                else {
                    //execution success

                    res.send('success create userThread');
                }
            })
    })



module.exports = router;