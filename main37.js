function toLowerCase(string) {
    let newString = "";
    if (string.length < 3) {
        newString = string.toUpperCase();
    } else {
        newString += string[0].toLowerCase();
        newString += string[1].toLowerCase();
        newString += string[2].toLowerCase();
        newString += string.slice(3);
    }
    return newString;
}
let userInput = prompt("Enter your word.");
let result = toLowerCase(userInput);
console.log(result);