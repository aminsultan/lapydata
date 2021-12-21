var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/xyz.html', function (req, res) {
    res.sendFile(__dirname + "/" + "abc.html");
})

app.get('/process_get', function (req, res) {
    res.send('<p>Username: ' + req.query['first_name'] + '</p><p>Lastname: ' +
         req.query['last_name'] + '</p>');
}) ;

app.listen(8000);
