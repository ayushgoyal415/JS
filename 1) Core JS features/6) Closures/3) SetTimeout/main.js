//------------------------------------------------------------------
function ques1() {
	let i = 1;
	setTimeout(function fun () {
		console.log(i);
	}, 3000); // 3000 ms
	console.log("Hello World");
}
ques1();

//------------------------------------------------------------------
// What does setTimeout do?
// It takes the function along with its lexical environment (closure) into a separate
// place and sets a timer to it. In the mean while the current execution proceeds.
// This is why 'Hello World' gets printed first. The code does not wait for setTimeout
// to end because it has left this execution context. When the timer ends, the setTimeout
// puts the function call back in call stack leading to its execution.

// Printing n numbers each after n seconds. For e.g. 1 after 1 second, 2 after 2 ...n.
// The following code doesn't work because var i was declared in block scope where it
// acts as global, for that reason, each setTimeout closure was pointing to the same i
//------------------------------------------------------------------
// function ques2() {
// 	for (var i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// }
// ques2();
//------------------------------------------------------------------

// The following code works because in this example, each setTimeout closure had
// its own i as i was declared using 'let' and 'let' is a block variable
//------------------------------------------------------------------
// function ques3() {
// 	for (let i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// }
// ques3();
//------------------------------------------------------------------

// How to do the above question while using var.
//------------------------------------------------------------------
// function ques4() {
// 	for (var i = 1; i <= 5; i++) {
// 		// Enclosing set_timeout function inside a function
// 		// Remember 'var' is a function scoped variable
// 		// Thus it leads formation of separate closure with different i each time
// 		function close(i) {
// 			setTimeout(function () {
// 				console.log(i);
// 			}, i * 1000);
// 		}
// 		close(i);
// 	}
// }
// ques4();
//------------------------------------------------------------------
