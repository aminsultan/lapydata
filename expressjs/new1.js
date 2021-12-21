const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("welcome to express programming")
});

app.get("/about", function(req, res){
    res.send("we are the developers")
});

app.get("/contact", function(req,res){
    res.send("mail me at: aminsultan10@gmail.com  & call me on: 9823221548")
});
app.listen(3000, function(req,res){
    console.log("server is running properly")
});
