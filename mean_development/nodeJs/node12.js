//events

let events = require('events');
let evtemt = new events.EventEmitter(); // here we are assigning events.EventEmitter to evtemt 

function myfun(){
console.log("this is a demo function");
}
evtemt.on("demoevent",myfun); // here we are binding the myfun to demoevent
evtemt.emit("demoevent"); // here we are calling demoevent through evtemt.emit
