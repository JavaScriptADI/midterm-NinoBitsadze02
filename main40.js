function isAte(a, b) {
    if ((a === 8 || b === 8) || (a - b === 8 || a + b === 8)){
        return true;
    } else {
        return false;
    }
}
let firstNum = Number(prompt("Enter the first number."));
let secNum = Number(prompt("Enter the second number."));
let result = isAte(firstNum, secNum);
console.log(result);