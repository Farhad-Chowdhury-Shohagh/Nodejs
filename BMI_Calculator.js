const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter your weight in kg: ", (weightInput) => {
  rl.question("Enter your height in meters: ", (heightInput) => {
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) { 
      console.log("Invalid input."); 
      rl.close(); 
      return; 
    }
    const bmi = weight / (height * height);
    console.log("Your BMI is: ", bmi.toFixed(2));
    if (bmi < 18.5) console.log("Category: Underweight");
    else if (bmi < 25) console.log("Category: Normal weight");
    else if (bmi < 30) console.log("Category: Overweight");
    else console.log("Category: Obese");
    rl.close();
  });
});
