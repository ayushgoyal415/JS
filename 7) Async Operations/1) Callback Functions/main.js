//-----------------------------------------------------------------------------------
// API (Application Programming Interface) Environments
//-----------------------------------------------------------------------------------
// Outer environments (i.e. outside the global execution context) that are accessed
// inside JS engine using the global object.
// Note : API environments may vary across different JS runtime environments
//-----------------------------------------------------------------------------------
// 1) setTimeout() -> gives access to timer
// 2) DOM APIs (e.g. document.getElementById) -> gives access to DOM trees
//    DOM : Document Object Model (i.e. html source code)
// 3) fetch() -> allows us to make connections to external servers
// 4) localStorage -> allows access to local storage
// 5) console
// 6) location

//-----------------------------------------------------------------------------------
// Does console.log show async or sync behavior?
//-----------------------------------------------------------------------------------
// console.log is not standardized, so the behavior is rather undefined, and can be
// changed easily from release to release of the developer tools.

//-----------------------------------------------------------------------------------
// CALL BACK FUNCTIONS
//-----------------------------------------------------------------------------------
// The one thing which is common among different APIs is that they all function using
// a call back function. Callback functions are functions that are passed into other
// functions as parameters. By using a call back function, APIs can give us access to
// the asynchronous world in a synchronous single threaded language.

//-----------------------------------------------------------------------------------
// CALL STACK BLOCKING
//-----------------------------------------------------------------------------------
// As JS is single threaded synchronous language, it only has 1 thread and 1 call stack.
// If call stack is currently executing a heavy program, it will stop the execution of
// code lines below it thus leading to delay. This is known as blocking.
// To prevent blocking we can use function callbacks which for at least sometime prevents
// the heavy functions from entering call stack.

//-----------------------------------------------------------------------------------
// HOW DOES setTimeout WORK?
//-----------------------------------------------------------------------------------
// 1) Before the timer ends, the function is stored in the 'API environment'.

// 2) When the timer runs out, the callback function enters in 'callback queue'. The call
// back function waits inside this queue until it is called by 'event loop'

// 3) Event loop acts as gatekeeper to check if there is anything inside callback queue
// and the call stack. It does not call any function from the callback queue until
// the call stack gets empty. (thus it allows everything to get executed before calling
// a function from the queue.).Once the callstack is empty, the event loop moves the
// function from the callback queue to the call stack.

//-----------------------------------------------------------------------------------
// WHY DO WE NEED A CALLBACK QUEUE (aka TASK QUEUE)?
//-----------------------------------------------------------------------------------
// It just helps to store multiple callback functions passed from web APIs (in order)
// waiting to be executed. It acts as temporary store for these functions until they get
// moved into the call stack by the event loop.

// Event loop will call these functions once there is nothing inside call stack. Firstly,
// it will move the first function to the call stack. It will wait until it executes,
// so that the call stack again gets emptied. Once call stack is emptied, now the
// next function is moved from the queue to the call stack and so on. So the event loop
// ensures that these callback functions enter the call stack one at a time so that
// the call stack doesn't get overloaded.

// Thus callback queue takes this burden of storing multiple call back functions
// waiting for them to get executed. Thus it helps keeping the call stack uncrowded.

//-----------------------------------------------------------------------------------
// HOW DO EVENT LISTENERS WORK?
//-----------------------------------------------------------------------------------
// It is very clear that none of the call back functions enter the call stack until
// the whole code is executed at least once and GEC gets popped out of the call stack.
// When the GEC works through the entire code, it sends all the call back functions
// encountered to the web APIs including the call back functions associated with the
// event listeners.

// The call back functions associated with the event listeners wait inside the web API
// till the listener gets invoked by an event. When this happens, the event listener
// passes 'an instance' of callback function into the call back queue -> picked at right
// time by event loop -> sent to call stack -> executed

// The major difference from setTimeout is that listener will still keep a copy of
// the call back function inside the web API, waiting for re-invocation and repeat.

//-----------------------------------------------------------------------------------
// HOW DO fetch() WORK?
// fetch("https://www.google.com").then((data) => console.log(data));
//-----------------------------------------------------------------------------------
// fetch() receives a promise. As soon as the promise is resolved, it sends the call
// back function into the 'microtask' queue (similar to callback queue but has higher
// priority). -> picked at right time by event loop -> sent to call stack -> executed

//-----------------------------------------------------------------------------------
// Mutation Observer
//-----------------------------------------------------------------------------------
// Mutation Observer keeps on checking whether there is some mutation inside the DOM
// tree(html) or not. If there is some mutation in the DOM tree, mutation observer
// can send a call back function inside the microtask queue.

// Note : All the call back functions that are returned by promises and mutation
// observer are received inside the microtask queue.

//-----------------------------------------------------------------------------------
// STARVATION
//-----------------------------------------------------------------------------------
// If in a case there are multiple call backs inside microtask queue, then event loop
// will execute all of them one by one before calling a call back from the call back
// queue. Thus a call back inside the call back queue may have to wait for a long
// time before execution, this is known as starvation.

// Starvation may be seen when a recursive call back enters inside the microtask queue
// thus giving rise to a new call back inside microtask queue.

//-----------------------------------------------------------------------------------
// setTimeout() cannot be relied upon
//-----------------------------------------------------------------------------------
// Although the API will pass the function into the call back queue as soon as the
// timer ends. But the call back function may have to wait for additional time
// inside the queue. This wait may occur due to -
// 1) a long GEC/other function already running in the call stack
// 2) presence of other functions in the call back queue which will execute one by one
// 3) presence of functions in the higher priority microtask queue.
// This process is also known as 'concurrency model' of JS.

// In the following example, the call back function will wait for 1 s in the queue.
console.log("start");

setTimeout(() => {
	console.log("call back");
}, 0);

let st = new Date().getTime();
do {
	var en = new Date().getTime();
} while (en < st + 1000);

console.log("end");

// Therefore to keep the setTimeout() predictable, it is generally recommended to
// avoid blocking of the call stack.
