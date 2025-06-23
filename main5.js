let string = "w3resource";
for (let i = 0; i < string.length; i++) {
    string = string[string.length -1] + string.slice(0, string.length -1);
    console.log(string);
}