let userNum = Number(prompt("Enter your number."));
if (Math.abs(userNum - 100) <= 20 || Math.abs(100 - userNum) <= 20) {
    console.log(`Given integer: ${userNum} is within 20 of 100.`)
} else if (Math.abs(userNum - 400) <= 20 || Math.abs(400 - userNum) <= 20) {
    console.log(`Given integer: ${userNum} is within 20 of 400.`);
} else {
    console.log("The given integer is neither within 20 of 100 nor 400");
}