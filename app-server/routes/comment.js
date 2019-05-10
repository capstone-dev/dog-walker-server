var express = require('express')
var router = express.Router()

// DATABASE SETTING
var connection=require('../configurations/dbConnection');
//LOGGER SETTING
const logger=require('../configurations/logConfiguration');

router.get('/',function(req, res, next) {

    var sql="";
    //쿼리스트링 존재안할 시 전체데이터 가져옴
    if(Object.keys(req.query).length==0)
        sql='select * from comment'
    else{//threadId에 해당하는 comment 가져옴
        sql='select * from comment where threadId=' +req.query.threadId;
    }
    var query = connection.query(sql,
        function(err,rows){
            if(err){
                res.send('err : ' + err);
                throw err;
            }
            if(rows[0]){
                res.send(rows)
            }
            else{
                res.send('no rows in db');
            }

        })



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
                    res.send('err : ' + error);
                    throw err;
                }
                else {
                    //execution success
                    res.send('success create comment');
                    logger.info(JSON.stringify(userComment)+" insertion success");
                }
            })
    })


module.exports = router;