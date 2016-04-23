var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var tableArray = require('./table');

var app = express();
var PORT = process.env.PORT || 3000;
var staticContentFolder;

//app.use(body-parser.json());
//app.use(body-parser.urlencoded({extended: true}));
//app.use(body-parser.text());
//app.use(body-parser.json({type:'application/vnd.api+json'}));

staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

app.listen(PORT,function(){
	console.log('Serving static content from ' + staticContentFolder)
	console.log('App listening on PORT: ' + PORT);
});

// GET method route
app.get('/reservation', function (req, res) {
  res.send('GET request to the homepage');
});

// GET method route
app.get('/table', function (req, res) {
  res.send('/table.js');
});

// GET method route
app.get('/admin', function (req, res) {
  res.send('GET request to the homepage');
});