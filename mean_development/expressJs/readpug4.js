var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './pugfiles');
app.use(express.static("public"));

app.get('/carimage', (req, res) => {

    res.render('file4');
        
    
});

app.listen(3000);
