var express = require('express');
var bodyParser = require('body-parser');

var app = express();



app.set('view engine', 'pug');
app.set('views', './pugfiles');

app.get('/', function(req, res){
    res.render('file5');
 });

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);

   res.send("recieved your request!");

   let x = req.body;

   console.log(x.say+" "+x.to);
});
app.listen(3000);