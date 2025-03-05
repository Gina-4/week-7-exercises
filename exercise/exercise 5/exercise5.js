// Simple Password Checker

const expectedPassword = "thisismypassword";
const password = prompt("Enter your password:");

if (password === expectedPassword) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}