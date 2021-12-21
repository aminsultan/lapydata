//read stream
var fs = require('fs');
var rs = fs.createReadStream("myfile.txt");
rs.setEncoding("utf-8");
let filedata = "";
rs.on("data", function(chunk){
    filedata += chunk;
});

rs.on("end", function(){
    console.log(filedata);
});

rs.on("error", function(err){
    console.log(err);
});

console.log("program ended");