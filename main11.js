const cels = 60;
const fahr = 45;
let celsToFahr = (9/5) * cels + 32;
let fahrToCels = (fahr - 32) / (9/5);
console.log(`${cels}°C is ${celsToFahr}°F`);
console.log(`${fahr}°F is ${fahrToCels}°C`);
