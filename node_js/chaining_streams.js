var fs = require("fs");
var zlib= require("zlib");
//compress input.txt to input.txt.gz
fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
console.log("file compressed");
