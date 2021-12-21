console.log("user 1 request");
setTimeout(callback,5000);
console.log("user 2 request");
setTimeout(callback,5000);
console.log("user 3 request");
setInterval(callback,5000);
function callback(){
    console.log("message to be display");
}