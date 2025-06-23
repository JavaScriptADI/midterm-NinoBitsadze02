let firstNum = Number(prompt("Enter your number."));
if (firstNum < 13) {
    console.log(`Your number: ${firstNum}is less than 13 and the difference is ${13 - firstNum}.`);
} else {
    console.log(`Your number: ${firstNum} is greater than 13 and the double of the difference is ${(firstNum - 13) * 2}`);
}