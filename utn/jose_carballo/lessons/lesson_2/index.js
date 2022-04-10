const events = require('events');
const eventEmiter = new events.EventEmitter();
const date = new Date();
const myEventHandler = () => {
        console.log(date)
}

eventEmiter.on('DATE', myEventHandler);
setTimeout(() => eventEmiter.emit('DATE'), 1000)
