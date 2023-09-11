// EventEmitter is capitalized because events return a class
const EventEmitter = require("events");

// Creating an object(instance) of class EventEmitter
// Practically we don't make an instance of EventEmitter (see logger)
const emitter = new EventEmitter();

/*

	.on() -> registers a listener to listener array for the event name. Accepts 2 args ->
	.addListener() can also be used instead

	1) Event Name : name of event for which you want to register the listener for.
	2) Call back function (that will be called when the event is raised)
	Note : Call back function parameter receives the arguments passed by emitter.

	Note : No checks are made to see if the listener has already been added for the same
	event name. Multiple calls passing the same combination of event name and listener will
	result in the listener being added, and called, multiple times.

	Note : .on() commands can be chained because it returns a reference to the EventEmitter
	(e.g. emitter in this case).

*/

const cb1 = () => console.log("CB1 : No args"),
  cb2 = msg => console.log(`CB2 : ${msg}`),
  cb3 = (msg1, msg2) => console.log(`CB3 : ${msg1}, ${msg2}`),
  cb4 = (...msgs) => console.log(`CB4 : ${msgs}`);


emitter
  .on("pop_message", cb1)
  .on("pop_message", cb2)
  .on("pop_message", cb3)
  .on("pop_message", cb4);

/*

	.emit() is used to raise an event. It accepts 2 args ->
	1) The name of event to emit - synchronously calls each of the listeners registered for the
	event name in the order they were registered. Note : event name can be symbol or a string.
	2) Arguments to pass to the listener which are then received inside listeners' cb functions'
	parameters. (note : We can also call an emitter without passing these 'additional' arguments).

	It is a boolean function. Returns true if the event name had listener(s). As it does
	not return a reference to the EventEmitter, .emit() commands cannot be chained.

	While calling the listeners, the emitter calls all the listeners registered to for the
	event name (even if its call back fxn accepts different arguments)

*/

const check = emitter.emit("pop_message", 1, 2, 3, 4, 5);
console.log(check);
