let firstNum = Number(prompt("Enter your first number."));
let secondNum = Number(prompt("Enter your second number."));
let thirdNum = Number(prompt("Enter your third number."));
if((firstNum >= 50 && firstNum <= 99) || (secondNum >= 50 && secondNum <= 99) || (thirdNum >= 50 && thirdNum <= 99)) {
    console.log(true);
} else {
    console.log(false);
}