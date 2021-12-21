var fs=require("fs");
var data=fs.readFileSync("myfile.txt");
console.log(data.toString());
console.log("program ended");
/*in this code we are learning how to block the node code 
and run the called file first
fs =  FILE STREAM
*/