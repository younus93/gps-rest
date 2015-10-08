var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'mysql.theyounus.com',
  user     : '',
  password : ''
});

connection.query('USE gps_database_younus');
app.set('port', 8000);


app.get('/', function(req, res){
  var data = JSON.stringify(req.query);
  var query =  connection.query('insert into g_p_s_infos SET `data` = ?', data , function(err, result){
    res.send("OK");
  });
  console.log(query.sql);
});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
