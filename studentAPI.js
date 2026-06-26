const express = require("express");
const app = express();
app.use(express.json());
let students = [
  { id: 1, name: "Farhad", department: "CSE" },
  { id: 2, name: "Rahim", department: "EEE" }
];
app.get("/", (req, res) => res.send("Welcome to Student API"));
app.get("/students", (req, res) => res.json(students));
app.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});
app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, name: req.body.name, department: req.body.department };
  students.push(newStudent);
  res.status(201).json(newStudent);
});
app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  student.name = req.body.name;
  student.department = req.body.department;
  res.json(student);
});
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter((s) => s.id !== id);
  res.json({ message: "Student deleted successfully" });
});
app.listen(3000, () => console.log("Student API running at http://localhost:3000"));
