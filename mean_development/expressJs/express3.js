var express = require('express');
var app = express();
var router1 = require('./express4.js');

var router2 = require('./express5.js');

app.use('/route1',router1);
app.use('/route2',router2);

app.listen(8000);