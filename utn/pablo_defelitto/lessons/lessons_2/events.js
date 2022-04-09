const events = require('events');
const eventEmitter = new events.EventEmitter();

//Create an event handler:
const mostrarFecha = function () {
  console.log(new Date().getDay());
}

//Assign the event handler to an event:
eventEmitter.on('scream', mostrarFecha);

//Fire the 'scream' event:
setInterval(()=>eventEmitter.emit('scream'),1000);