var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/poetry', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'poetry.html'));
});
app.get('/movies', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'movies.html'));
});


app.get('/Lifestyle', function (req, res) {
  res.send('Lifestyle page');
});

app.get('/Relationship', function (req, res) {
  res.send('Relationship page');
});

app.get('/technology', function (req, res) {
  res.send('technology');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
