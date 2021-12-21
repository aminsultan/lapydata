/***
 * 
 * what is express??
    framework
    NODE JS -> SERVER SIDE 
    EXPRESS FRAMEWORK + ADDITIONAL FEATURES +  SHORTCUTS
 * 
 * 
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Welcome to JavaTpoint!');
}); 

app.listen(8000);