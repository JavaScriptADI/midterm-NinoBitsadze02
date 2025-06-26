function twoInts(a, b) {
    if (a + b >= 50 && a + b <= 80) {
        return 65;
    } else {
        return 80;
    }
}

let firstNum = Number(prompt("Enter the first number."));
let secNum = Number(prompt("Enter the second number."));
let result = twoInts(firstNum, secNum);
console.log(result);