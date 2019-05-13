var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var bodyParser=require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))


var connection = mysql.createConnection({
  host     : '54.180.113.161',
  port     : 3306,
  user     : 'root',
  password : 'teaming',
  database     : 'capdtest',
});
connection.connect();/* GET users listing. */
router.get('/', function(req, res, next) {

console.log(req.query.name);
var query=connection.query('select name from test1',
function(err,rows){
//if(err)throw err;
if(rows[0]){
res.send(rows[0])
//console.log(rows[0])

//responseData.result="ok";
//responseData.name=rows[0].name;
}else{
console.log("no rows")
//responseData.result="none";
//responseData.name="";
}
})
});

router.post('/', function(req,res){
  var body = req.body;
     var id = body.id;
     var name = body.name;
console.log(body);
console.log(id);
var query = connection.query('insert into animals (name) values ('+ name + '")', function(err, rows) {
console.log("here");

   if(err) { throw err;}
  res.json(body);
console.log("Data inserted!");
     })
 })


router.get('/1',function(req, res, next) {

var query=connection.query('select name from animals',
function(err,rows){
//if(err)throw err;
if(rows[0]){
res.send(rows[0])
//console.log(rows[0])

//responseData.result="ok";
//responseData.name=rows[0].name;
}else{
console.log("no rows")
//responseData.result="none";
//responseData.name="";
}
})
});

/*
router.get('/:name',function(req, res, next) {

var query=connection.query('select name from test1',
function(err,rows){
//if(err)throw err;
if(rows[0]){
res.send(rows[0])

//console.log(rows[0])

//responseData.result="ok";
//responseData.name=rows[0].name;
}else{
console.log("no rows")
//responseData.result="none";
//responseData.name="";
}
})
});

*/


module.exports = router;
