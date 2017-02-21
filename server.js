var express = require('express');
var morgan = require('morgan');
var path = require('path');

var sell = {
    title : 'Sell your unwanted things here',
    content : ` <p style="text-align:center;">Why choose us? <p>
    	<p>r_cube is India's premier online shopping site that offers customers and bulk buyers the option to purchase unused, branded open box, surplus, overstock and refurbished products at the lowest prices guaranteed.</p>	`
};

var htmlTemplet = `
    <html>
    <head>
        
        <link href="style.css" rel="stylesheet" />
         <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>R-cube</title>
    </head>
    <body>
        <div class="logo">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        <div class="nav_bar">
        <div class="drop-cont">All categories</div>
            <ul class="quick_bar">
                
                <ul class="mobile">Mobile</ul>
                <ul class="tablets">Tablets</ul>
                <ul class="tv">TV</ul>
                <ul class="Laptops">Laptops</ul>
                <ul class="Headphones">Headphones</ul>
                <ul class="others">Others</ul>
                <ul class="offers">Offers</ul>
            </ul>
            
        </div>
	
	<div class="p1">
${content}	
	<div class ="img-medium">
	<img src="/ui/madi.png">
	<img src="/ui/madi.png">
	<img src="/ui/madi.png">
	</div>

	</div>
		
        <br>
        
        <div class="section1">
            <h1>R<sup>3</sup></h1>
           <p> Hi! I'm Ujjwal. This is my first global web page....!!</p>
	<h1> We Guarantee</h1>
	<p>100% original products with facilities like Free Shipping and Cash on Delivery, with an easy and 100% secure payment options, for your safe and sound 		online shopping experience.</p>

           
              <a href="http://ujjwal1997.imad.hasura-app.io/article-one">Click here  to know more</a>
              </div>
`;

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
