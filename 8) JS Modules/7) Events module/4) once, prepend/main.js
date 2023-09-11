const EventEmitter = require("events");
const emitter = new EventEmitter();

/*
		.once()
		- Adds a one-time listener function for the event name. Gets deleted after called once.
		- Returns a reference to the EventEmitter, so that calls can be chained.

		.prependListener()
		- Same as .on() -> the difference is that it adds a listener to the front of internal
		  listener array for the event name

		.prependOnceListener()
		- Same as .once() -> the difference is that it adds a listener to the front of
		  internal listener array for the event name
*/


emitter
	.on("event", () => console.log(1))
	.on("event", () => console.log(2))
	.on("event", () => console.log(3))
	.once("event", () => console.log(4));

console.log(`Listener count before emit : ${emitter.listenerCount("event")}`);
emitter.emit("event");
console.log(`Listener count after emit : ${emitter.listenerCount("event")}`);


