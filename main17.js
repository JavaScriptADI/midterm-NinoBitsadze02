let specNum = Number(prompt("Enter your number."));
if (specNum > 19) {
    console.log(`The triple of the difference between your number: ${specNum} and 19 is: ${(specNum - 19) * 3}.`);
} else {
    console.log(`The difference between your number: ${specNum} and 19 is: ${19 - specNum}.`);
}