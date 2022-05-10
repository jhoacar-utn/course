const events = require("events");
const emitter = new events.EventEmitter();

function displayTime() {
    let now = new Date();
    process.stdout.cursorTo(0);
    process.stdout.write(`Current date: ${now.toString()}`);
    process.stdout.clearLine(1);
}

emitter.on("tick", displayTime);

setInterval(() => emitter.emit("tick"), 1000);
