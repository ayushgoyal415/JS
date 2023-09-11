const EventEmitter = require("events");
const emitter = new EventEmitter();

const cb1 = () => {},
  cb2 = () => {};

emitter.on("log", cb1).once("log", cb2);

/*
		.rawListeners()

		Similarly to .listeners(), it also returns a copy of the array of listeners for the
		event name. But here the returned array keeps any wrappers that were originally
		present around the listeners (such as those created by .once()). The .once()
		listeners are returned in wrappers whereas .on() listeners are returned as it is.
*/

const list = emitter.listeners("log");
console.log("Listeners : ", list);

const raw = emitter.rawListeners("log");
console.log("Raw Listeners : ", raw);

// Extracting the .once() function from wrapper. The function is stored as property 'listener'
const wrapped_fun = raw[1];
const unwrapped_fun = wrapped_fun.listener;

// Using unwrapped 'once' function ->  does not unbind the function after calling once
// (i.e. it is still present in the listener array)
unwrapped_fun();
console.log(
  `Count after using unwrapped function obtained by .rawListeners() : ${emitter.listenerCount(
    "log"
  )}`
);

// Listeners directly returns the unwrapped function thus it never unbinds the function
list[1]();
console.log(
  `Count after using unwrapped function obtianed by .listeners() : ${emitter.listenerCount(
    "log"
  )}`
);

// Using wrapped 'once' function ->  binds the function after calling once (i.e. it is
// removed from the internal listener array and thus can no longer be called by emitter)
wrapped_fun();
console.log(
  `Count after using wrapped function obtained by .rawListeners() : ${emitter.listenerCount(
    "log"
  )}`
);
