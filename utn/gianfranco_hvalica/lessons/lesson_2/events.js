const events = require('events');
const eventEmitter = new events.EventEmitter();

//Create an event handler:
const handleShowDate = function () {
  console.log(new Date());
}

//Assign the event handler to an event:
eventEmitter.on('show_date', handleShowDate)

setInterval(()=>eventEmitter.emit('show_date'),1000);

