const EventEmitter = require("events");
const emitter = new EventEmitter();

/*
		.off() (can use .removeListener() instead)

		Removes the specified listener from the listener array for the event name. Accepts 2 args :
		1) Event name for which the listener is registered
		2) The call back function attached to the listener to be removed (necessary)

		Removes, at most, one instance of a listener from the listener array. If any single
		listener has been added multiple times to the listener array for the specified
		event name, then removeListener() must be called multiple times to remove each instance.
*/

const cb1 = () => console.log("1"),
  cb2 = () => console.log("2");

emitter.on("event", cb1).on("event", cb2);
console.log(emitter.listeners("event"));

emitter.off("event", cb2);
console.log(emitter.listeners("event"));

/*
		Once an event is emitted, all listeners attached to it at the time of emitting are
		called in order. This implies that off() calls after emitting and before the last
		listener finishes execution will not remove them from emit() in progress.
		Subsequent events behave as expected. See the example below.

		Making a listener that turns off a relative listener (i.e. a listener registered for
		the same event name)
*/
const cb3 = () => {
  console.log("3");
  emitter.off("event", cb1);
};
emitter.on("event", cb3);

emitter.emit("event");

emitter.emit("event");

/*
		.removeAllListeners()

		Removes all listeners, or those of the specified event name.
		It is bad practice to remove listeners added elsewhere in the code, particularly
		when the EventEmitter instance was created by some other component or module (e.g.
		sockets or file streams).
		Returns a reference to the EventEmitter, so that calls can be chained.

*/
