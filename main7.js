for (let year = 2014; year <= 2050; year++) {
    let janFirst = new Date(year, 0, 1);
    let day = janFirst.getDay();
    if (day === 0) {
        console.log(`${year} January 1st is Sunday.`);
    }
}