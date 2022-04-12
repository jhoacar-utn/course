var hoy = new Date();
var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var mostrarFecha = function () {
  var fecha =
    hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
  var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
  var fechaYHora = fecha + " " + hora;

  console.log("Ahora lo muestro:", fechaYHora);
};

//Assign the event handler to an event:
eventEmitter.on("show_date", mostrarFecha);

//Fire the 'scream' event:
setInterval(() => eventEmitter.emit("show_date"), 1000);
