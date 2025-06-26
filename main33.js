let firstNum = Number(prompt("Enter the first number."));
let secNum = Number(prompt("Enter the second number."));
if ((40 <= firstNum && firstNum <= 60) && (40 <= secNum && secNum <= 60)) {
    console.log("Both numbers are in 40 ... 60 range.");
} else if ((70 <= firstNum && firstNum <= 100) && (70 <= secNum && secNum <= 100)) {
    console.log("Both numbers are in 70 ... 100 range.");
} else {
    console.log("These numbers are neither in 40 ... 60 nor 70 ... 100 range inclusive.")
} 
    