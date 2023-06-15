import { merge } from "../leetcode";

describe("merge", () => {
	it("should merge two sorted arrays", () => {
		const nums1 = [1, 2, 3, 0, 0, 0];
		const m = 3;
		const nums2 = [2, 5, 6];
		const n = 3;
		merge(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
	});

	it("should handle empty arrays", () => {
		const nums1: number[] = [];
		const m = 0;
		const nums2: number[] = [];
		const n = 0;
		merge(nums1, m, nums2, n);
		expect(nums1).toEqual([]);
	});

	it("should handle one empty array", () => {
		const nums1 = [1, 2, 3];
		const m = 3;
		const nums2: number[] = [];
		const n = 0;
		merge(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2, 3]);
	});

	it("should handle one array with one element", () => {
		const nums1 = [1];
		const m = 1;
		const nums2 = [2];
		const n = 1;
		merge(nums1, m, nums2, n);
		expect(nums1).toEqual([1, 2]);
	});

	it("should handle one array with one element", () => {
		const nums1 = [0];
		const m = 0;
		const nums2 = [1];
		const n = 1;
		merge(nums1, m, nums2, n);
		expect(nums1).toEqual([1]);
	});
});
