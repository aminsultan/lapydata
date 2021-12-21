var express = require("express");

var app = express();

app.set('view engine', 'pug');
app.set('views', './pugfiles');

app.get('/dynamic2', (req, res) => {

    res.render('dynamic2', {
        user: { name: "shamsuddin", age: "21" }
    })
});

app.listen(3000);