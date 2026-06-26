const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/") res.end("<h1>Home Page</h1><p>Welcome to the home page.</p>");
  else if (req.url === "/about") res.end("<h1>About Page</h1><p>This is a Node.js routing project.</p>");
  else if (req.url === "/contact") res.end("<h1>Contact Page</h1><p>Email: example@gmail.com</p>");
  else { res.writeHead(404, { "Content-Type": "text/html" }); res.end("<h1>404 Page Not Found</h1>"); }
});
server.listen(3000, () => console.log("Server running at http://localhost:3000"));
