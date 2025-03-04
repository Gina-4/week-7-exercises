// Variable Naming Brainstorm
let currentOutsideTemp = "60 degrees";
console.log(currentOutsideTemp);

let favoritePizza = "margherita";
console.log(favoritePizza);

let numberCharacterString = "26";
console.log(numberCharacterString);

// Strings

let Strings = currentOutsideTemp + " " + favoritePizza;
console.log(Strings);

let names = "Gina";
console.log(names);

let age = "10";
console.log(age);

let namesAndAge = names + " " + age;
console.log(namesAndAge);
console.log(`my name is ${names} i am ${age}`);

// Demonstrate string interpolation. Interpolate a string with a variable that stores a number.

let number = "84";
let result = `The answer to the exam question is ${number}.`;
console.log(result);

// Simple Grading System

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "F";
  }
}
console.log(getGrade(90));

// Simple Password Checker

const expectedPassword = "thisismypassword";
const password = prompt("Enter your password:");

if (password === expectedPassword) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

//  Weather Outfit Selector

function outfitSuggestion(temperature) {
  if (temperature < 15) {
    return "Wear a jacket. Its cold!";
  } else if (temperature >= 15 && temperature <= 25) {
    return "Wear a jumper. Its warm!";
  } else if (temperature > 25) {
    return "Wear shorts. Its hot!";
  }
}
console.log(outfitSuggestion(6));

