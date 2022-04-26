var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var mostrar_fecha  = function () {
  //console.log('I hear a scream!');
  const fecha = new Date();
  console.log(fecha)
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', mostrar_fecha );

//Fire the 'scream' event:
eventEmitter.emit('scream');
setTimeout(mostrar_fecha, 1000);