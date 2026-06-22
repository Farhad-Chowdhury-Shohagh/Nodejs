const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Enter operator (+, -, *, /): ", (operator) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;
      if (operator === "+") result = a + b;
      else if (operator === "-") result = a - b;
      else if (operator === "*") result = a * b;
      else if (operator === "/") {
        if (b === 0) { 
          console.log("Cannot divide by zero."); 
          rl.close(); 
          return; 
        }
        result = a / b;
      } 
      else {
        console.log("Invalid operator."); 
        rl.close(); 
        return; 
      }
      console.log("Result: ", result);
      rl.close();
    });
  });
});
