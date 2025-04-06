const EventEmitter = require("node:events");

const myFirstEmitter = new EventEmitter();

// register a listener 
myFirstEmitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

myFirstEmitter.emit("greet", "Adarsh Kumar");