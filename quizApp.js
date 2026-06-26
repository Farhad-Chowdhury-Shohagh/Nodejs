const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const questions = [
  { question: "What does Node.js allow JavaScript to do?", options: ["Run only in browser", "Run outside browser", "Design images", "Create hardware"], answer: 2 },
  { question: "Which command runs a Node.js file?", options: ["node file.js", "run file.js", "start node", "npm file.js"], answer: 1 },
  { question: "Which module is used to create a server?", options: ["fs", "os", "http", "path"], answer: 3 },
  { question: "Which package manager is used with Node.js?", options: ["pip", "npm", "composer", "gem"], answer: 2 }
];
let currentQuestion = 0;
let score = 0;
function showQuestion() {
  if (currentQuestion >= questions.length) { console.log(`Quiz finished! Your score is ${score}/${questions.length}`); rl.close(); return; }
  const q = questions[currentQuestion];
  console.log(`
Question ${currentQuestion + 1}: ${q.question}`);
  q.options.forEach((option, index) => console.log(`${index + 1}. ${option}`));
  rl.question("Enter your answer: ", (input) => {
    if (parseInt(input) === q.answer) { console.log("Correct!"); score++; }
    else console.log("Wrong answer.");
    currentQuestion++;
    showQuestion();
  });
}
showQuestion();
