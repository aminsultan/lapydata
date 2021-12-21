// TEMPLATING
// Pug is a templating engine for Express. Templating engines are used to remove the 
// cluttering of our server code with HTML
// JADE,  

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function (req, res) {
    res.render('first');
});

app.get('/dynamic_view', function (req, res) {
    res.render('dynamic', {fname:"abc", lname:"xyz"});
});

app.get('/content', function (req, res) {
    res.render('maincontent');
});

// npm install --save body-parser multer
// IT IS USED TO SEND FORM DATA THROUGH POST METHOD


app.listen(8000);