var express = require("express");
var app = express();

app.set ('view engine', 'pug');
app.set('views','./pugfiles');

app.get('/run',(req,res)=>{
    res.render('file1');
});
app.listen(2000);