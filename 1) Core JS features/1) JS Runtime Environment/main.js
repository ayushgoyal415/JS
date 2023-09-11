//-----------------------------------------------------------------------------------
// JS Runtime environment (e.g. browser, node.js) includes the following :
//-----------------------------------------------------------------------------------
// 1) JS Engine
// 2) API environments (to connect to the outer environment)
// 3) Event loop (to connect between call stack, queues)
// 4) Call back queue
// 5) Microtask queue

//-----------------------------------------------------------------------------------
// JS ENGINE
//-----------------------------------------------------------------------------------
// Three things which happens to human readable code inside the JS engine :
// JS Engine perform 3 major functions : parse -> compile/interpret -> execute
// JS Engine has 3 major components required to perform the 3 major functions :
//-----------------------------------------------------------------------------------
// 1) Syntax parser
// 2) Interpreter +/- compiler
// 3) Memory heap, garbage collector and call stack

// 1) Parsing -> the code is broken into tokens. Also an 'Abstract Syntax Tree' is
// created by 'Syntax Parser'. (can check AST on https://astexplorer.net)

// 2) Interpretation +/- Compilation (JIT compilation)
// Complier based languages -> these languages use a compiler to compile their code
// before it is executed. The compiler forms a new optimized version of the code (runs
// very fast and has performance improvements) which can then be executed.
// Interpreter based languages -> Interpreter directly executes the entire code line
// by line without any prior compilation. It does not know what will happen in the next
// line as it hasn't compiled anything prior to execution.
// Overall interpreter based languages are fast but compiler based are very efficient.

// JS can behave as an interpreter or compiler based language based on the JS Engine
// being used. Initially JS was built as an interpreter based language. This is because
// JS was meant to run on browsers and browsers cannot wait for compilation to happen.
// But now most of the browser engines use both interpreter and compiler. Thus today's
// JS Engines can use interpreter along with a compiler making JS an 'Just in time
// compilation' language aka 'JIT compilation' language.

// JIT is achieved by compiler working in runtime along with the interpreter. Basically
// it is not like that the code will wait for the entire compilation to be finished
// before it gets executed. Instead the compiler tries to compile each line as much as
// it can and in the mean time the interpreter executes the compiled line during
// runtime.

// 3) Execution
// Memory heap -> space where all variables and functions are assigned memory
// Garbage collector -> It tries to free up memory from the memory heap when possible.
// It uses 'Mark and Sweep' algorithm.
// Call stack -> keeps track of functions under execution

