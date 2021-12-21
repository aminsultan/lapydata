var express = require('express');
var app = express();

var router = express.Router();

app.use('/', router);

router.get('/',(req,res)=>{
    res.send('this is router get');

});

app.listen(8000);