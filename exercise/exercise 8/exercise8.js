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
