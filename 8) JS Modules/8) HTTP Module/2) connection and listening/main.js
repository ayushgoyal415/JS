const http = require("http");

const server = http.createServer();

//-----------------------------------------------------------------------------------------
// EVENT - Connection
//-----------------------------------------------------------------------------------------
// When a new connection is established (on the port), all listeners registered to
// 'connection' are called.

// A server object has a default listener registered for 'connection'
console.log(`Overall default listeners : ${server.eventNames()}`);
const default_connection_listener = server.listeners("connection");
console.log(`${default_connection_listener}`);

// Registering a custom listener for 'connection'
server.on("connection", () => console.log("New Connection"));

//-----------------------------------------------------------------------------------------
// EVENT - Listening
//-----------------------------------------------------------------------------------------
// .listen() emits all the listeners registered for 'listening' as soon as it executes
server.on("listening", () => console.log(`Port : ${server.address().port}`));

server.listen(3000);

// Try -> http://localhost:3000/
// Note : terminal will keep on listening port 3000 unless you end it pressing Ctrl+C
