var fs=require("fs");
var data="simply easy learning";
var writestream = fs.createWriteStream('output.txt');
writestream.write(data,'UTF8');
writestream.end();

writestream.on("finish",function(){
    console.log("write completed");

});
writestream.on("error",function(err){
    console.log(err.stack);
});
console.log("program ended");

