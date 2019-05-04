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

var query=connection.query('select * from user',
function(err,rows){
console.log("here1");
//if(err)throw err;
if(rows[1]){
res.json(rows[1]);
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






module.exports = router;
