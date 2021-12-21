
var fs=require("fs");
var data= fs.readFileSync("input.txt");
console.log("synchronous read:"+data.toString());
console.log("program ended");