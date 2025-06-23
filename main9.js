const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);
const oneDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((christmas - today) / oneDay);
console.log(`Its ${daysLeft} days left until Christmas.`);