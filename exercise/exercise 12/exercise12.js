// Calculator

function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}
console.log(calculate (20, 2, 'add'));
console.log(calculate (20, 2, 'subtract'));
console.log(calculate (20, 2, 'multiply'));
console.log(calculate (20, 2, 'divide'));