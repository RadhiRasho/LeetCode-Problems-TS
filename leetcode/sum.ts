function sum(arr: number[]): number {
	if (!arr.length) return 0;

	return arr.shift()! + sum(arr);
}

console.log(sum([1, 2, 3, 4]));

function sum2(arr: number[]): number {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}

	return total;
}

console.log(sum2([1, 2, 3, 4]));

function sum3(arr: number[]): number {
	return arr.reduce((prev, curr) => prev + curr);
}

console.log(sum3([1, 2, 3, 4]));
