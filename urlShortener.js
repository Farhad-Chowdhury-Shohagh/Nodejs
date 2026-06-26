const express = require("express");
const app = express();
app.use(express.json());
const urls = {};
function generateCode() { return Math.random().toString(36).substring(2, 8); }
app.get("/", (req, res) => res.send("Simple URL Shortener API"));
app.post("/shorten", (req, res) => {
  const longUrl = req.body.longUrl;
  if (!longUrl) return res.status(400).json({ message: "Long URL is required" });
  const code = generateCode();
  urls[code] = longUrl;
  res.json({ shortUrl: `http://localhost:3000/${code}`, longUrl });
});
app.get("/:code", (req, res) => {
  const longUrl = urls[req.params.code];
  if (!longUrl) return res.status(404).send("URL not found");
  res.redirect(longUrl);
});
app.listen(3000, () => console.log("URL Shortener running at http://localhost:3000"));
