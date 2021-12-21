//blocking code
//file handling
//file reading

var fs= require('fs');//fs is file stream
var data = fs.readFileSync("myfile.txt");
console.log(data.toString());
console.log("program ended");