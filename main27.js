let userInput = prompt("Write something here");
let toLC = userInput.toLowerCase();
let java = "java";
let firstChars = toLC.slice(0, 4);
if (firstChars === java) {
    console.log(true);
} else {
    console.log(false);
}