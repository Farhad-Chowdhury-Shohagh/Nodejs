const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html><html><head><title>Node.js Server</title></head><body><h1>Welcome to Node.js Server</h1><p>This server is created using the built-in http module.</p></body></html>`);
});
server.listen(3000, () => console.log("Server running at http://localhost:3000"));
