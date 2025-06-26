let firstNum = Number(prompt("Enter the first integer."));
let secNum = Number(prompt("Enter the second integer."));
let closest = "";
if (Math.abs(firstNum - 100) < Math.abs(secNum - 100)) {
    closest = firstNum;
} else {
    closest = secNum;
}
console.log(`The closest number to 100 is ${closest}.`);