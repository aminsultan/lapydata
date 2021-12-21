var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function (req, res) {
    // res.cookie('language', 'express js').send('cookie set'); //Sets name = express
    res.send(req.cookies);
    
});

app.listen(3000);