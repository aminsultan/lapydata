let events = require('events');
let evtemt = new events.EventEmitter();

function fun1(){
    console.log("this is first function");
    evtemt.emit("second");
}


evtemt.on("first",fun1);
evtemt.on("second", function(){
    console.log("this is second function");
});

evtemt.emit("first");