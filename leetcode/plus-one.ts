export function plusOne(digits: number[]) {
	let sum = 0;
	for (let i = 0; i < digits.length; ++i) {
		sum += digits[i];
	}
	return sum;
}
