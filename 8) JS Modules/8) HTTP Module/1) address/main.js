const http = require("http");

// createServer() returns an object which has all capabilities of EventEmitter
const server = http.createServer();

//-----------------------------------------------------------------------------------------
// .listen() listens to the specified port
//-----------------------------------------------------------------------------------------
server.listen(3000);

//-----------------------------------------------------------------------------------------
// .address()
//-----------------------------------------------------------------------------------------
// Returns the bound address, the address family name, and port of the server as reported
// by the operating system if listening on an IP socket (useful to find which port was
// assigned when getting an OS-assigned address).

// Returns null before the 'connection' event has been emitted or after calling .close().
const address = server.address();
console.log(`Port : ${address.port}`);
console.log(`Family : ${address.family}`);
console.log(`Address : ${address.address}`);

//-----------------------------------------------------------------------------------------
// Interesting use case
//-----------------------------------------------------------------------------------------
console.log(`Click here to visit : http://localhost:${server.address().port}`);