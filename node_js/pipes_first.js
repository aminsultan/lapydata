var fs=require("fs");
var readsteam= fs.createReadStream("input.txt");
var writestream=fs.createWriteStream("output.txt");
// pipe the read and write operations
// read input.txt and write to output.txt
readsteam.pipe(writestream);
console.log("program ended");