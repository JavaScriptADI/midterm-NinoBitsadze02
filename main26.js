let userInput = prompt("Enter any word.");
let threeChar = userInput.slice(userInput.length - 3, userInput.length);
let result = threeChar + userInput + threeChar;
console.log(result);