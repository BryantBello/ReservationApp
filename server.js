var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var table = require('./app/data/tableData');

var app = express();
var PORT = process.env.PORT || 3000;
var staticContentFolder;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

staticContentFolder = __dirname + '/app';
app.use(express.static(staticContentFolder));


// GET method route
app.get('/reservation', function (req, res) {
  res.sendFile(path.join(staticContentFolder + '/public/reservation.html'));
});

// GET method route
app.get('/table', function (req, res) {
  res.sendFile(path.join(staticContentFolder + '/public/tablePage.html'));
});

// GET method route
app.get('/admin', function (req, res) {
  res.sendFile(path.join(staticContentFolder + '/public/admin.html'));
});



app.listen(PORT,function(){
	console.log('Serving static content from ' + staticContentFolder)
	console.log('App listening on PORT: ' + PORT);
});