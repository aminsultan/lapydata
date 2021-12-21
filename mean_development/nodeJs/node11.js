//non blocking code
//a syncronously works and executes the line first who takes less amount of time


let fs = require('fs');
fs.readFile("myfile.txt", function(err,data){
    if(err) throw err;
    console.log(data.toString());
});
console.log("program ended");