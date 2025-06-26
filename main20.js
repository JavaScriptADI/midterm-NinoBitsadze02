let firstNum = Number(prompt("Enter the first number."));
let secondNum = Number(prompt("Enter the second number"));
if ((firstNum < 0 && secondNum > 0) || (firstNum > 0 && secondNum < 0)) {
    console.log("One of the numbers is negative");
} else if (firstNum > 0 && secondNum > 0) {
    console.log("The numbers are positive.");
} else {
    console.log("The numbers are negative.");
}