var exp = require('express');
var app = exp();

app.get('/', (req,res)=>{
    res.send('Hello World: this is get request');
});

app.post('/',(req,res)=>{
    res.send('this is post request');
});

app.get('/hello',(req,res)=>{
res.send('this is hello request: using get');
});

app.post('/hello',(req,res)=>{
    res.send('this is hello post request');
});

app.all('/test',(req,res)=>{
    res.send('this is all method: in browser it works as get only, for post and delete etc.. we need to use "postman" ');
});
app.listen(8000);