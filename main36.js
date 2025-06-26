let firstNum = prompt("Enter the first three digit integer.");
let secNum = prompt("Enter the second three digit integer.");
let thirdNum = prompt("Enter the third three digit integer.");
if (firstNum[2] === secNum[2] && secNum[2] === thirdNum[2]) {
    console.log("The last digits of these integers are the same number.");
} else {
    console.log("The last digits of these integers are not the same number.");
}