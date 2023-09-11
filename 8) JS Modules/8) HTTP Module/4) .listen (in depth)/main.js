const http = require("http");
const server1 = http.createServer();
const server2 = http.createServer();
const server3 = http.createServer();
const server4 = http.createServer();

// Listening to local host with port 3000
server1
	.on("listening", () =>
		console.log(
			`Server 1 -> http://localhost:${server1.address().port}, IP ${
				server1.address().address
			} (${server1.address().family})`
		)
	)
	.on("request", (req, res) => res.end("Server 1 : Ok"));
server1.listen(3000);

// Listening to to local host with random port
server2
	.on("listening", () =>
		console.log(
			`Server 2 -> http://localhost:${server2.address().port}, IP ${
				server2.address().address
			} (${server2.address().family})`
		)
	)
	.on("request", (req, res) => res.end("Server 2 : Ok"));
server2.listen(0);

// Listening to a local host with IPv4 127.0.0.1 with port 3000
// IPv4 -> adds an additional layer of protection
// Now this localhost cannot be accessed outside of the IP address
server3
	.on("listening", () => {
		console.log(
			`Server 3 -> http://localhost:${server3.address().port}, IP ${
				server3.address().address
			} (${server3.address().family})`
		);
		console.log(
			`Server 3 -> http://${server3.address().address}:${
				server3.address().port
			}`
		);
	})
	.on("request", (req, res) => res.end("Server 3 : Ok"));
server3.listen(3000, "127.0.0.1");

// Listening to a local host with IPv6 ::1 with port 3000
server4
	.on("listening", () => {
		console.log(
			`Server 4 -> http://localhost:${server4.address().port}, IP ${
				server4.address().address
			} (${server4.address().family})`
		);
		console.log(
			`Server 4 -> http://[${server4.address().address}]:${
				server4.address().port
			}`
		);
	})
	.on("request", (req, res) => res.end("Server 4 : Ok"));
server4.listen(3000, "::1");
