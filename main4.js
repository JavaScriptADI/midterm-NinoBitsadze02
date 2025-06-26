const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
const roundedArea = area.toFixed(2);
console.log(`The triangle sides are: ${a}, ${b}, ${c}, the area is ${roundedArea}.`);
