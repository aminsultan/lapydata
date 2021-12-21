// ROUTING

var express = require('express');
var app = express();

// app.get('/hello', function (req, res) {
//     res.send("Hello World!");
// });


// app.get('/', function (req, res) {
//     res.send("YOU REQUESTED EMPTY PATH");
// });

// app.get('/world', function (req, res) {
//     res.send("World!");
// });

// WE ARE UNABLE TO CALL THIS POST REQUEST DIRECTLY FROM THE BROWSER URL
// SO WE NEED POSTMAN SOFTWARE

// app.post('/anything', function (req, res) {
//     res.send("Hello World! anything");
// });


// app.all('/getpost', function (req, res){
//     res.send("THIS URL DEALS WITH ALL");
// });


// ROUTING WITH DIFFERENT PATTERNS
// YOU CAN HOST FOR http://localhost:4200/abcd OR http://localhost:4200/acd

// app.get('/ab?cd', function (req, response) {
//     response.send('ab?cd')
// })


// app.get('/ab+cd', function (req, res) {
//     res.send('ab+cd')
// })

// YOU CAN HOST FOR http://localhost:4200/ab348jhjsdcd OR http://localhost:4200/abdsfkhhjsdcd
// YOU CAN ADD ANYTHING IN PLACE OF THE *

// app.get('/ab*cd', function (req, res) {
//     res.send('ab*cd')
// });

// app.get('/ab(cd)?e', function (req, res) {
//     res.send('ab(cd)?e')
// });



// http://localhost:4200/users/abcd/books/expressjs
// {"userId":"abcd","bookId":"expressjs"}

// app.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params);
// })


// ROUTING WITH MIDDLEWERE NEXT() FUNCTION

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    // next()
}, function (req, res, next) {
    console.log('Hello from B!')
    next()
}, function (req, res){
    console.log("THIRD FUNCTION");    
});

app.listen(4200);