// const msg = require("./index.js");
// console.log(msg);

// Import the http module
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Hello from server");
});

// Listen on port 3000
server.listen(8000, () => {
  console.log("Server is running on http://localhost:3000");
});
