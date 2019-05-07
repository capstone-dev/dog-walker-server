var express = require('express')
var router = express.Router()

// DATABASE SETTING
var connection=require('./dbConnection');

router.get('/',function(req, res, next) {

    var query = connection.query('select * from comment',
        function(err,rows){
            if(err)throw err;

            if(rows){
                res.send(rows)
            }
            else{
                console.log("no rows")
            }

        })

    router.post('/', function(req, res){

        var body = req.body;
        var userComment = {
            'userId' : req.body.userId,
            'commentContent' : req.body.commentContent,
            'threadId' : req.body.threadId,
        };
        //execute sql
        connection.query("INSERT INTO comment set ?", userComment,
            function (error, result, fields){

                if(error){
                    //에러 발생시
                    res.send('err : ' + error)
                }
                else {
                    //execution success
                    res.send('success create comment');
                }
            })
    })
})

module.exports = router;