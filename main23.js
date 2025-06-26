let userInput = prompt("Enter your word.");
let firstChar = userInput[0];
let lastChar = userInput[userInput.length - 1];
let middle = userInput.slice(1, userInput.length - 1);
let result = lastChar + middle + firstChar;
console.log(result);