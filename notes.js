const fs = require("fs");
const fileName = "notes.json";
function loadNotes() { if (!fs.existsSync(fileName)) return []; const data = fs.readFileSync(fileName, "utf8"); return JSON.parse(data || "[]"); }
function saveNotes(notes) { fs.writeFileSync(fileName, JSON.stringify(notes, null, 2)); }
const command = process.argv[2];
const title = process.argv[3];
const body = process.argv.slice(4).join(" ");
let notes = loadNotes();
if (command === "add") {
  if (!title || !body) console.log("Usage: node notes.js add title body");
  else { notes.push({ title, body }); saveNotes(notes); console.log("Note added successfully."); }
} 
else if (command === "list") {
  notes.forEach((note, index) => console.log(`${index + 1}. ${note.title}`));
} 
else if (command === "read") {
  const note = notes.find((n) => n.title === title);
  if (note) { console.log("Title:", note.title); console.log("Body:", note.body); } else console.log("Note not found.");
} 
else if (command === "delete") {
  const filteredNotes = notes.filter((n) => n.title !== title);
  if (filteredNotes.length === notes.length) console.log("Note not found.");
  else { saveNotes(filteredNotes); console.log("Note deleted successfully."); }
} 
else {
  console.log("Commands:");
  console.log("node notes.js add title body");
  console.log("node notes.js list");
  console.log("node notes.js read title");
  console.log("node notes.js delete title");
}
