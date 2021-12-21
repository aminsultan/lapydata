var express = require('express');
var app = express();

var router = require("./router1");

app.use('/abc', router);

app.listen(3000);