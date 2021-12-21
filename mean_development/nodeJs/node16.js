//write stream

var fs = require('fs');
let mydata = "this is just a data from node";
let ws = fs.createWriteStream("output.txt");

ws.write(mydata,'utf-8');
ws.end();
ws.on("finish", function(){
    console.log("completed writing");
});

ws.on("error", function(err){
    console.log(err);
});

console.log("program ended");