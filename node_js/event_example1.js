var events=require('events');
var eventEmitter=new events.EventEmitter();

var ringbell=function(){
    console.log("Ting Tong");
}
eventEmitter.on('dooropen',ringbell);
eventEmitter.emit('dooropen');