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
  res.send('respond with a resource');

var query=connection.query('select name from test1',
function(err,rows){
//if(err)throw err;
if(rows[0]){
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
