var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/xyz.html', function (req, res) {
    res.sendFile(__dirname + "/" + "abc.html");
})

app.get('/process_get', function (req, res) {
    response = {
        fname: req.query.first_name,
        lname: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.listen(8000);