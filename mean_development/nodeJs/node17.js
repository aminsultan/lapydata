//pipes

var fs=require('fs');
var rs= fs.createReadStream("myfile.txt");
var ws= fs.createWriteStream("output2.txt");
rs.pipe(ws);
console.log("program ended");