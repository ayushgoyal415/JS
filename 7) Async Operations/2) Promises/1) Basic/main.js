//-----------------------------------------------------------------------------------
// For e.g. Making an e-commerce website using call back functions
//-----------------------------------------------------------------------------------
const cart = ["T-shirt", "Pant", "Jeans", "Kurta"];
function createOrder(cb) {
	cb();
}
createOrder(function proceedToPayment() {});

//-----------------------------------------------------------------------------------
// Benefits of call back functions
//-----------------------------------------------------------------------------------
// 1) Helps in achieving asynchronous behavior.
// 2) Helps in preventing call stack block.
// 3) Helps in assuring that a particular function gets called only if the other function
// gets invoked (for e.g. payment option only after cart checkout). Thus making a
// nested callbacks one after another.

//-----------------------------------------------------------------------------------
// Problems with call back functions
//-----------------------------------------------------------------------------------
// 1) Call back Hell (aka pyramid doom) -> very difficult to maintain
// When we keep on nesting call back functions into call back functions.
// Here code starts implementing horizontally rather than vertically.

// 2) Inversion of control -> very risky thing (many things can go wrong)
// We cannot trust a call back function. This is because when we pass a function
// into another function, we are giving the control of our code to another code.

//-----------------------------------------------------------------------------------
// Using promises -> 3 states -> pending, fulfilled, rejected
//-----------------------------------------------------------------------------------
const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API);

// console.log(user); // This is pending state (because JS doesn't wait for fetch API)

// setTimeout(() => console.log(user), 2000); // This is fulfilled state

// Attaching a call back function to promise (the data from promise object (here user)
// is passed into the parameter of call back function (here data))
// Using 'then' ensures that the call back function will only run once the promise
// has returned. Thus avoiding inversion of control.
user.then(data => console.log(data));

// Data in promise objects is immutable

// So what is a promise?
// A promise is an object representing the eventual completion or failure of an
// asynchronous operation.

// Promise object is basically a placeholder which will be filled with a value
// once an asynchronous operation has ended. For e.g. here 'user' acts as a
// placeholder waiting for fetch to return a value which it can store. Promise object
// is basically an empty container to store future value (once a promise is resolved).
