const EventsEmitter = require('events');

//create class
class MyEmitter extends EventsEmitter{

};

//initialize the object
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('Events fired...');
});

//init events
myEmitter.emit('event');
myEmitter.emit('event');

function fxn(){
    console.log('events turned off');
    //return fxn();
}

function fxnon(){
   console.log('events turned on and fired');
   //return fxn();
}

//Registers the named instance to an emitter
emitters.on('mine', fxnon);

//deregisters the event listner
emitters.off('mine', fxn);

//calls the named event
emitters.emit('mine');

//Counts the number of listners
console.log(emitters.listenerCount('mine'));

console.log(emitters.rawListeners('mine'));
