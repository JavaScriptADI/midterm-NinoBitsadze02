let userInput = prompt("Enter your word.").toLowerCase();
let firstTwo = userInput.slice(0, 2);
let py = "py";
if (firstTwo === py) {
    console.log(userInput);
} else {
    console.log(py + userInput);
}