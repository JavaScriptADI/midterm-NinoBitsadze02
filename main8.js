const randomNum = Math.floor(Math.random() * 10) + 1;
let userInput = Number(prompt("Guess the number."));
if (userInput === randomNum) {
    console.log("Good work.");
} else {
    console.log("Not matched.");
}