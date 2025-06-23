let firstNum = Number(prompt("Enter your first number."));
let secondNum = Number(prompt("Enter your second number"));
if (firstNum === secondNum) {
    console.log(`Triple of the sum is ${(firstNum + secondNum) * 3}`);
} else {
    console.log(`The sum is ${firstNum + secondNum}`);
}