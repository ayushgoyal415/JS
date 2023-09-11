const EventEmitter = require("events");

//. Our class Logger is inheriting EventEmitter base class properties
//. Basically adding functionality to class EventEmitter. eg .log() here
class Logger extends EventEmitter {
  log(msg) {
    this.emit("log", msg); //. Here 'this' points to the Logger class instance(object)
  }
}

//. Making an instance of class logger
const logger = new Logger();
logger.on("log", msg => console.log(`Listener called : ${msg}`));

//. Calling log function using object from Logger class
logger.log("Hello. This is Ayush");
