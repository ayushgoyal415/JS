const http = require("http");

//-------------------------------------------------------------------------------------
// There are 2 ways of handling API requests
//-------------------------------------------------------------------------------------
// 1) Using .createServer() -> It accepts a call back function with two arguments which
// is called when an API request is made.
const server = http.createServer((req, res) => {
	if (req.url === "/") res.write("Hello World"), res.end();
});

// 2) Using a listener registered for 'request' which is emitted when an API request
// is made.
server.on("request", (req, res) => {
	if (req.url === "/api/courses")
		res.write(JSON.stringify([1, 2, 3, 4, 5, 6])), res.end();
});

server.listen(3000);
console.log("Listening on port 3000...");
