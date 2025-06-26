let firstNum = Number(prompt("Enter the first number in 40 ... 60 range."));
let secNum = Number(prompt("Enter the second number in 40 ... 60 range."));
if ((40 <= firstNum && firstNum <= 60) && (40 <= secNum && secNum <= 60)) {
    let largest = Math.max(firstNum, secNum);
    console.log(`The largest number is ${largest}.`);
} else {
    console.log("One or both numbers are not in 40 ... 60 range.");
}