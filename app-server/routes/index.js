var express = require('express');
var router = express.Router();



/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

// DATABASE SETTING
var connection=require('./dbConnection');
router.get('/',function(req, res, next) {

var query=connection.query('select * from thread',
function(err,rows){

if(err)throw err;

if(rows[0]){
res.json(rows[0]);

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






module.exports = router;
