var fs = require("fs");
var data="";
//creat readable stream
var readerstream=fs.createReadStream('input.txt');
//set the encoding to be UTF-8.
readerstream.setEncoding('UTF-8');
//handle stream events-->data, end and error
readerstream.on('data',function(chunk)
{
    data +=chunk;
});
readerstream.on('end',function(){
    console.log(data);
});
readerstream.on('error',function(err){
    console.log(err.stack);
});
console.log('program ended');