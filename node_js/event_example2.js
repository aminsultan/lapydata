var events=require('events');
var eventEmitter=new events.EventEmitter();
var ringbell=function(){
    console.log("tring tring");
}
eventEmitter.on('doorOpens',ringbell);
eventEmitter.on('bellrings',function(msg){
    console.log(msg);
});
eventEmitter.emit("doorOpens");
eventEmitter.emit("bellrings","Welcome");