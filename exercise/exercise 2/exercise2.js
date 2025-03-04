// How to ask the user for input

let name = prompt("What is your name?");
console.log("Hello, " + name);

let age = prompt("How old are you?");
console.log("I am " + age);

// Time or Date Output
const userOption = prompt("Do you want to see the 'time' or 'date'?");

const date = new Date().toDateString();
const time = new Date().toTimeString();

if (userOption == "time") {
  console.log("The current time is: " + time);
} else if (userOption == "date") {
  console.log("The current date is: " + date);
} else {
  console.log("Invalid input");
}

// Math Wizard

function add(num1, num2) {
  return (num1 = num2);
}
console.log(add(8, 9));

function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(13, 2));

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(15, 26));

function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(20, 5));

// Greeting Generator

function greet(name) {
  return `Hello, ${name}!`;
}
const greeting = greet("Hortensia");
console.log(greeting);

// Weight Converter

function kiloToPound(pound) {
  return pound / 2.2;
}
console.log(kiloToPound(1));
console.log(kiloToPound(0.512));
console.log(kiloToPound(2342324323));

function poundToKilo(kilo) {
  return kilo * 2.2;
}
console.log(poundToKilo(12));
console.log(poundToKilo(14));
console.log(poundToKilo(-5));

// Calculator

function calculate(num1, num2, operator) {

}

