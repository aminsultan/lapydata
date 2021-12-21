var express = require('express');
var myrouter = express.Router();

myrouter.get('/hello', function (req, res) {
    res.send("Hello World!");
});


myrouter.get('/', function (req, res) {
    res.send("YOU REQUESTED EMPTY PATH");
});

myrouter.get('/world', function (req, res) {
    res.send("World!");
});

module.exports = myrouter;