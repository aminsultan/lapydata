//imort events
var events=require('events'); 
// creat an event emitter object
var eventEmitter=new events.EventEmitter(); 
//creat an event handler
var connectHandler=function connected(){
    console.log('connection successful');
    //run the data received event
eventEmitter.emit('data_received');
}
//bind the connection event with the handler
eventEmitter.on('connection',connectHandler);
//bind the data received event with the anonymous function
eventEmitter.on('data_received',function()
{
    console.log('data received');
});
eventEmitter.emit('connection');
console.log("program end");




