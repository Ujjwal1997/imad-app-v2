var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/poetry', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'poetry.html'));
});
app.get('/ui/movies', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'movies.html'));
});

var counter=0;
apt.get('/counter', function(req,res){
   counter = counter +1;
   res.send('counter.toString()');
});

app.get('/ui/Lifestyle', function (req, res) {
  res.send('Lifestyle page');
});

app.get('/ui/Relationship', function (req, res) {
  res.send('Relationship page');
});

app.get('/ui/technology', function (req, res) {
  res.send('technology');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
});
app.get('/ui/images.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.jpeg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
