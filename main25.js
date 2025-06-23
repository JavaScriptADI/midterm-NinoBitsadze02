let userInput = Number(prompt("Enter a positive number."));
if (userInput % 3 == 0 && userInput % 7 == 0) {
    console.log("Your number is multiple of 3 and 7.");
} else if (userInput % 3 == 0) {
    console.log("Your number is a multiple of 3.");
} else if (userInput % 7 == 0) {
    console.log("Your number is multiple of 7.");
} else {
    console.log("Your number is neither multiple of 3 nor 7.");
}
