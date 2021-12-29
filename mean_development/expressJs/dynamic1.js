var express = require('express');

var app = express();

app.set ('view engine','pug');
app.set('views','./pugfiles');

app.get ('/dynamic', (req,res)=>{
    res.render('dynamic1', {
        name:'TutorialsPoint',
        url:"http://www.tutorialspoint.com"
    });
});
app.listen(3000);