import { deleteDuplicates, deleteDuplicatesRecursive } from "../leetcode";
import { ListNode } from "../types";

describe("deleteDuplicates", () => {
	it("should return null if the input list is empty", () => {
		expect(deleteDuplicates(null)).toBeNull();
	});

	it("should remove duplicates from a sorted list", () => {
		const list = {
			val: 1,
			next: {
				val: 1,
				next: {
					val: 2,
					next: null,
				},
			},
		};
		const expectedList = {
			val: 1,
			next: {
				val: 2,
				next: null,
			},
		};
		expect(deleteDuplicates(list)).toEqual(expectedList);
	});

	it("should not modify a list with no duplicates", () => {
		const list = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null,
				},
			},
		};
		expect(deleteDuplicates(list)).toEqual(list);
	});
	it("should remove duplicates from a sorted list", () => {
		const input: ListNode = {
			val: 1,
			next: {
				val: 1,
				next: {
					val: 2,
					next: {
						val: 3,
						next: {
							val: 3,
							next: null,
						},
					},
				},
			},
		};
		const expectedOutput: ListNode = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null,
				},
			},
		};
		expect(deleteDuplicates(input)).toEqual(expectedOutput);
	});
});

describe("deleteDuplicates - Recursive", () => {
	it("should remove duplicates from a sorted list", () => {
		const input: ListNode = {
			val: 1,
			next: {
				val: 1,
				next: {
					val: 2,
					next: {
						val: 3,
						next: {
							val: 3,
							next: null,
						},
					},
				},
			},
		};
		const expectedOutput: ListNode = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null,
				},
			},
		};
		expect(deleteDuplicatesRecursive(input)).toEqual(expectedOutput);
	});

	it("should return null if the input list is empty", () => {
		expect(deleteDuplicatesRecursive(null)).toBeNull();
	});

	it("should not modify a list with no duplicates", () => {
		const input: ListNode = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null,
				},
			},
		};
		expect(deleteDuplicatesRecursive(input)).toEqual(input);
	});
});
