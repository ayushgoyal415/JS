function counter() {
	var curr_count = 0;
	return () => {
		curr_count++;
		console.log(`Counter : ' ${curr_count}`);
	};
}
var counter1 = counter();
counter1();
counter1();
counter1();
counter1();

// Making a counter with constructors (i.e. constructor function)
// Bascially it gets converted to class
function constructor_counter() {
	var curr_count = 0;
	this.increment_counter = function () {
		curr_count++;
		console.log(`Counter : ' ${curr_count}`);
	};
	this.decrement_counter = function () {
		curr_count--;
		console.log(`Counter : ' ${curr_count}`);
	};
}
var counter2 = new constructor_counter();
counter2.increment_counter();
counter2.increment_counter();
counter2.decrement_counter();
counter2.decrement_counter();

// Garbage collector : It is a program inside JS Engine which frees up the unutilised
// memory.

//-----------------------------------------------------------------------------------
//Disadvantages of closures
//-----------------------------------------------------------------------------------
// 1) Overconsumption of memory because the variables declared inside closure
// are not garbage collector. If not handled properly, it can lead to memory leak.

// When we return an inner function that forms a closure with its parent function
// to get refernce value of variables declared in parent function, these variables
// should not go to garbage collector so that this memory does not get deallocated.
// Basically such variables are getting stored as they would be stored on heap.

// But garbage collecter does its job very well. It does not allow all the
// variables in the parent's lexical environment to form closure with the inner function.
// It smartly deallocates all those useless variables while still keeping the
// neccessary variables.
