 var express = require('express')
 var app = express()
 var router = express.Router()
// var path = require('path')
 var mysql = require('mysql')
 

 // DATABASE SETTING (Google Cloud SQL)
 var connection = mysql.createConnection({
     host     : '54.180.113.161',
     port     : 3306,
     user     : 'root',
     password : 'teaming',
     database : 'capdtest'
 });

 connection.connect();


router.get('/',function(req, res, next) {

var query=connection.query('select name from test1',
function(err,rows){
console.log("here1");
//if(err)throw err;
if(rows[0]){
res.json(rows[0]);
console.log("here2");
console.log(rows[0])
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
var query = connection.query('insert into test1 (id, name) values (' + id +' ,"' + name + '")', function(err, rows) {
console.log("here");      

   if(err) { throw err;}
  res.json(body);       
console.log("Data inserted!");
     })
 })

 module.exports = router;
