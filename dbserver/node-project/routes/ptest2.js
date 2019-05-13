var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}))

//mysql 모듈 불러오기
var mysql = require('mysql')

//mysql connection

var connection = mysql.createConnection({
    host : '54.180.113.161',
    port : 3306,
    user : 'root',
    password : "teaming",
    database : "capdtest"

});

//mysql 접속

connection.connect();
router.get('/', function(req, res, next){
    console.log(req.query.name);

    var query = connection.query('select name from animals',
    function(err,rows){
        if(row[0]){
            res.send(row[0])
        }
        else{
            console.log("now rows")

        }
        
    })
});
//user 라우터




router.post('/', function(req, res){

    var body = req.body;
    var id = req.body.id;
    var name = req.body.name;

    console.log(body);
    console.log(name);

    if(id && name){ // user id, pw 일치시

        //execute sql
        var query = connection.query("INSERT INTO animals (name) VALUES ('"+ name +"')",
        function (error, result, fields){
	console.log("here1")
            if(error){
                //에러 발생시
                res.send('err : ' + error)
            }
            else {
                //execution success
                console.log ( id + ',' + name)
                res.send('success create user id: '+ id + ' name: ' + name
                )
            }


        })

    }
})

module.exports = router;
