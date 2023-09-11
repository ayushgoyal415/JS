//-----------------------------------------------------------------------------------
// Global execution context has 2 components :
//-----------------------------------------------------------------------------------
// 1) Memory (variable environment) -> stores two things -> variables and functions
// 2) Code Component (thread of execution) -> In this component, the code is
// executed one line at a time

// Note : JS is a synchronous single threaded language
// This means that JS can execute only one line at a time and that too in a specific
// order. Can only go to next line once the current line has completed execution

//-----------------------------------------------------------------------------------
// IN DEPTH OF GLOBAL EXECUTION CONTEXT
//-----------------------------------------------------------------------------------
// The execution context is created in two phases:

// 1) Memory creation phase : JS allocates memory to all the variables and functions
// present in the global scope (note : it will not allocate memory to the variables
// present in the local scopes). In the memory space, it stores value of variables as
// undefined and for functions it stores the entire code for the function.

// 2) Code execution phase : Executes line by line. This is the time when the variables
// are assigned the actual value in the memory space when the code reaches the line of
// variable initiation. What will happen when code reaches a function ? -> see below

//-----------------------------------------------------------------------------------
// LOCAL EXECUTION CONTEXT
//-----------------------------------------------------------------------------------
// When the code execution reaches a function, a new execution context is created.
// Again this local execution context will have its own 2 separate phases i.e. memory
// and code execution phases.

// 1) Memory phase : Here firstly memory is allocated to all variables at first
// (including the parameter arguments) and all are initially set to undefined.

// 2) Code execution phase : Here firstly the parameter variables (args) are assigned
// value which was passed into the function. Then it will execute the function line by
// line. When code reaches return, it tells the local context to end the program and
// return the 'control' back to the place from where the function was invoked. Once the
// function code execution phase gets over, the whole local execution context is deleted.

// When the global context phase code execution phase is completed, the global execution
// context is now deleted.

//-----------------------------------------------------------------------------------
// CALL STACK aka execution context stack, program stack, control stack, runtime stack
//-----------------------------------------------------------------------------------
// Stores the execution contexts one over the other (follows LIFO like stacks do)
// Whenever a new execution context is created, it is pushed into the stack
// Whenever an execution context is completed, it is popped out of the stack and deleted
// Note : The context at the top of the stack is the context which is currently executing
// Note : The bottom most context is always the global execution context.

//-----------------------------------------------------------------------------------
// EMPTY GLOBAL EXECUTION CONTEXT
//-----------------------------------------------------------------------------------
// Even when an empty JS program is executed, a global execution context is created
// It is then deleted and popped off from the call stack.

//-----------------------------------------------------------------------------------
// WINDOW IN GLOBAL EXECUTION CONTEXT
//-----------------------------------------------------------------------------------
// Whenever a global execution context is created, the JS engine also creates a global
// object named 'window'. This window has a lot of functions and variables in it. All
// these variables and functions are accessible anywhere in a JS program. Whenever we
// use 'this' keyword in the global scope, it points to the global window object.

// The global object have different names in different JS engines
// In chrome (V8 engine) : window
// In node.js : global

console.log(globalThis);
