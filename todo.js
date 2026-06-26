const fs = require("fs");
const fileName = "todos.json";
function loadTodos() { if (!fs.existsSync(fileName)) return []; const data = fs.readFileSync(fileName, "utf8"); return JSON.parse(data || "[]"); }
function saveTodos(todos) { fs.writeFileSync(fileName, JSON.stringify(todos, null, 2)); }
const command = process.argv[2];
const task = process.argv.slice(3).join(" ");
let todos = loadTodos();
if (command === "add") {
  if (!task) console.log("Please enter a task.");
  else { todos.push({ task, completed: false }); saveTodos(todos); console.log("Task added successfully."); }
} else if (command === "list") {
  if (todos.length === 0) console.log("No tasks found.");
  else todos.forEach((todo, index) => console.log(`${index + 1}. ${todo.task} - ${todo.completed ? "Done" : "Pending"}`));
} else if (command === "done") {
  const index = parseInt(process.argv[3]) - 1;
  if (todos[index]) { todos[index].completed = true; saveTodos(todos); console.log("Task marked as completed."); } else console.log("Invalid task number.");
} else if (command === "delete") {
  const index = parseInt(process.argv[3]) - 1;
  if (todos[index]) { todos.splice(index, 1); saveTodos(todos); console.log("Task deleted successfully."); } else console.log("Invalid task number.");
} else {
  console.log("Commands:");
  console.log("node todo.js add Buy books");
  console.log("node todo.js list");
  console.log("node todo.js done 1");
  console.log("node todo.js delete 1");
}
