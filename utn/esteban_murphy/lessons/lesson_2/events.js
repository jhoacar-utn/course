
const events = require('events');
const eventEmitter = new events.EventEmitter();

//Create an event handler to show date
const handleShowDate = function () {
    const actualDate = new Date();
    console.log(actualDate.toUTCString());
}

//Assign the event handler to an event:
eventEmitter.on('show_date', handleShowDate);

setInterval(()=>eventEmitter.emit('show_date'),1000) //Show the event every 1000 ms