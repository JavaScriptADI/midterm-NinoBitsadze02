let userInput = prompt("Enter your word.");
let script = "script";
let fifth = userInput.slice(4, 10).toLowerCase();
let result = userInput.slice(0, 4) + userInput.slice(10, userInput.length);
if (fifth === script) {
    console.log(result);
} else {
    console.log(userInput);
}
