const EventEmitter = require("events");
const emitter = new EventEmitter();

const cb1 = () => {},
  cb2 = () => {},
  cb3 = () => {},
  cb4 = () => {};

emitter
  .on("pop_message", cb1)
  .on("pop_message", cb2)
  .on("pop_message", cb3)
  .on("pop_message", cb4);

// .listeners() -> returns a copied array of all the listeners registered to the event name
// Note : As it returns a copy and not a reference, copy needs to be recreated each time
// the listeners for the event name are modified.
console.log(emitter.listeners("pop_message"));

// .listenerCount() -> Returns the number of listeners listening to the event name
console.log(emitter.listenerCount("pop_message"));

/*
		.setMaxListeners() and .getMaxListeners()

		By default EventEmitters will print a warning if more than 10 listeners are added for
		a particular event. This is a useful default that helps finding memory leaks. The
		emitter.setMaxListeners() method allows the limit to be modified for this specific
		EventEmitter instance. The value can be set toInfinity (or 0) to indicate an unlimited
		number of listeners.
		Returns a reference to the EventEmitter, so that calls can be chained.
		
*/

console.log(`Max listeners : ${emitter.getMaxListeners()}`);
emitter.setMaxListeners(20);
console.log(`Max listeners : ${emitter.getMaxListeners()}`);

// .eventNames()
// Returns an array listing the events for which the emitter has registered listeners.
// The values in the array are string(s) or Symbol(s).

emitter.on("one", () => {}).on(Symbol("/"), () => {});

console.log(emitter.eventNames());
