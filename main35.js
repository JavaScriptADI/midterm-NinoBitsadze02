let userInput = prompt("Enter a word, that includes 'a'").toLowerCase();
if (userInput[1] === "a" || userInput[2] === "a" || userInput[3] === "a") {
    console.log("'a' is between 2nd and 4th positions.");
} else {
    console.log("'a' is not between the 2nd and 4th positions.");
}