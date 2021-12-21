var fs=require("fs");
fs.readFile("myfile1.txt",function(err,data)
{
    if(err){
        return console.error(err);
    }
    else{
        console.log(data.toString());
    }});

console.log("program ended");
/*in this code we are learning how to run node code without blocking it
and then run the loaded file. if loaded file completes 
the loading then inbetween the running of node code loaded file will be executed.  */