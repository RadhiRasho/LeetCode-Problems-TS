import { maxDepth } from "../leetcode/max-depth-binary-tree";
import { TreeNode } from "../types";

describe("maxDepth", () => {
	it("should return 3 for [3,9,20,null,null,15,7]", () => {
		const root: TreeNode = {
			val: 3,
			left: {
				val: 9,
				left: null,
				right: null,
			},
			right: {
				val: 20,
				left: {
					val: 15,
					left: null,
					right: null,
				},
				right: {
					val: 7,
					left: null,
					right: null,
				},
			},
		};
		expect(maxDepth(root)).toBe(3);
	});

	it("should return 2 for [1,null,2]", () => {
		const root: TreeNode = {
			val: 1,
			left: null,
			right: {
				val: 2,
				left: null,
				right: null,
			},
		};
		expect(maxDepth(root)).toBe(2);
	});
});
