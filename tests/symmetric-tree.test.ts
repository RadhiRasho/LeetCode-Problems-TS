import { isSymmetric } from "../leetcode/symmetric-tree";
import { TreeNode } from "../types";

describe("isSymmetric", () => {
	it("should return true for a symmetric tree", () => {
		const root: TreeNode = {
			val: 1,
			left: {
				val: 2,
				left: { val: 3, left: null, right: null },
				right: { val: 4, left: null, right: null },
			},
			right: {
				val: 2,
				left: { val: 4, left: null, right: null },
				right: { val: 3, left: null, right: null },
			},
		};
		expect(isSymmetric(root)).toBe(true);
	});

	it("should return false for [1,2,2,null,3,null,3]", () => {
		// create tree
		const root: TreeNode = {
			val: 1,
			left: {
				val: 2,
				left: null,
				right: {
					val: 3,
					left: null,
					right: null,
				},
			},
			right: {
				val: 2,
				left: null,
				right: {
					val: 3,
					left: null,
					right: null,
				},
			},
		};

		// assert
		expect(isSymmetric(root)).toBe(false);
	});
});
