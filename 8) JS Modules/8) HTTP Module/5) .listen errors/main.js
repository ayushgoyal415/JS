const http = require("http");
const server1 = http.createServer();
const server2 = http.createServer();

const PORT = 3000, IPv6 = "::1"; // prettier-ignore

const err_cb = err => console.log(err);
const lis_cb = err => console.log(`Listening...`);

//. Listeners registered for 'error' are automatically invoked if there is an error

server1.on("error", err_cb).listen(PORT, lis_cb);
// server1.listen(4000, lis_cb); //~ ERR_SERVER_ALREADY_LISTEN : server already listening to another port

// server2.on("error", cb).listen(PORT, lis_cb); //~ EADDRINUSE: address already in use by another server
server2.on("error", err_cb).listen(PORT, IPv6, lis_cb); // Not error (:::3000 v/s [::1]:3000)
