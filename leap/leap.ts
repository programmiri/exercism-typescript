function evenlyDivisible(year: number, div: number) {
	return year % div === 0;
}

function isLeapYear(year: number) {
	return (
		evenlyDivisible(year, 4) &&
		!(evenlyDivisible(year, 100) && !evenlyDivisible(year, 400))
	);
}

export default isLeapYear;
