const mysql = require('mysql')

 // DATABASE SETTING
 const connection = mysql.createConnection({
     host     : '54.180.113.161',
     port     : 3306,
     user     : 'root',
     password : 'teaming',
     database : 'capswdb'
 });

connection.connect();

module.exports=connection;
