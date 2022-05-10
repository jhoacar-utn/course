const events = require ('events');
const eventEmitter = new events.EventEmitter();

const MyEventHandler = () => {
    console.log(new Date());
}
eventEmitter.on ('scream', MyEventHandler);

setInterval(()=>eventEmitter.emit('scream'),1000);


