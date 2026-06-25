const fs = require("fs");  
const fileName = "contacts.json";
function loadContacts() { if (!fs.existsSync(fileName)) return []; const data = fs.readFileSync(fileName, "utf8"); return JSON.parse(data || "[]"); }
function saveContacts(contacts) { fs.writeFileSync(fileName, JSON.stringify(contacts, null, 2)); }
const command = process.argv[2];
const name = process.argv[3];
const phone = process.argv[4];
let contacts = loadContacts();
if (command === "add") {
  if (!name || !phone) console.log("Usage: node contact_book.js add name phone");
  else { contacts.push({ name, phone }); saveContacts(contacts); console.log("Contact added successfully."); }
} 
else if (command === "list") {
  contacts.forEach((contact, index) => console.log(`${index + 1}. ${contact.name} - ${contact.phone}`));
} 
else if (command === "search") {
  if (!name) { console.log("Please enter a name to search."); }
  else {
    const result = contacts.filter((contact) => contact.name.toLowerCase().includes(name.toLowerCase()));
    if (result.length === 0) console.log("No contact found.");
    else result.forEach((contact) => console.log(`${contact.name} - ${contact.phone}`));
  }
} else if (command === "delete") {
  const updatedContacts = contacts.filter((contact) => contact.name !== name);
  if (updatedContacts.length === contacts.length) console.log("Contact not found.");
  else { saveContacts(updatedContacts); console.log("Contact deleted successfully."); }
} 
else {
  console.log("Commands: ");
  console.log("node contact_book.js add Farhad 01700000000");
  console.log("node contact_book.js list");
  console.log("node contact_book.js search Farhad");
  console.log("node contact_book.js delete Farhad");
}
