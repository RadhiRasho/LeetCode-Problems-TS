// generate a few tests for quicksort

import { quicksort } from "../leetcode/quicksort";

describe("quicksort", () => {
	it("should sort an array of numbers", () => {
		expect(quicksort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
		expect(quicksort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
		expect(quicksort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
		expect(quicksort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
		expect(quicksort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
		expect(quicksort([8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
		expect(quicksort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expect(quicksort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it("should sort an array of strings", () => {
		expect(quicksort(["d", "b", "a", "c"])).toEqual(["a", "b", "c", "d"]);
		expect(quicksort(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"]);
		expect(quicksort(["d", "c", "b", "a"])).toEqual(["a", "b", "c", "d"]);
		expect(quicksort(["a", "a", "a", "a"])).toEqual(["a", "a", "a", "a"]);
		expect(quicksort(["a", "b", "c", "d", "e", "f", "g", "h"])).toEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
		expect(quicksort(["h", "g", "f", "e", "d", "c", "b", "a"])).toEqual(["a", "b", "c", "d", "e", "f", "g", "h"]);
		expect(quicksort(["a", "b", "c", "d", "e", "f", "g", "h", "i"])).toEqual([
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
		]);
		expect(quicksort(["i", "h", "g", "f", "e", "d", "c", "b", "a"])).toEqual([
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
		]);
	});
});
