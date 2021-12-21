var fs= require("fs");
//asynchronous read
fs.readFile("input.txt",function(err,data){
    if (err){return console.log(err);}
    else { console.log("asynchronous read"+data.toString());}
});