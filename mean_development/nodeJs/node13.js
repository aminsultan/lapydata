let events = require('events');
let evtemt = new events.EventEmitter();

function fun1(){
    console.log("this is first function");
    evtemt.emit("second");

}

function fun2(){
    console.log("this is second function");
}

evtemt.on("first",fun1);
evtemt.on("second",fun2);

evtemt.emit("first");