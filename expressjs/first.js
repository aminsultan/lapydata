var express = require('express');
var app = express();
app.get('/',function (req,res){
    res.send('welcome to JavaExpressProgramming');
});

app.listen(8000);