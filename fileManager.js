const fs = require("fs");
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");
if (command === "write") {
  fs.writeFileSync(fileName, content);
  console.log("File written successfully.");
} 
else if (command === "read") {
  if (fs.existsSync(fileName)) console.log(fs.readFileSync(fileName, "utf8"));
  else console.log("File not found.");
} 
else if (command === "append") {
  fs.appendFileSync(fileName, " " + content);
  console.log("Content appended successfully.");
} 
else if (command === "delete") {
  if (fs.existsSync(fileName)) { fs.unlinkSync(fileName); console.log("File deleted successfully."); }
  else console.log("File not found.");
} 
else {
  console.log("Commands:");
  console.log("node file_manager.js write test.txt Hello World");
  console.log("node file_manager.js read test.txt");
  console.log("node file_manager.js append test.txt New Content");
  console.log("node file_manager.js delete test.txt");
}
