import { sortedArrayToBST } from "../leetcode/convert-sorted-array-to-binary-tree";
import { TreeNode } from "../types";

describe("sortedArrayToBST", () => {
	it("should return null for an empty array", () => {
		expect(sortedArrayToBST([])).toBeNull();
	});

	it("should return the root node for an array with one element", () => {
		expect(sortedArrayToBST([1])).toEqual(new TreeNode(1));
	});

	it("should return a balanced BST for an array with multiple elements", () => {
		const nums = [-10, -3, 0, 5, 9];
		const expected = new TreeNode(0, new TreeNode(-10, null, new TreeNode(-3)), new TreeNode(9, new TreeNode(5), null));
		expect(sortedArrayToBST(nums)).toEqual(expected);
	});

	it("should return a balanced BST for an array with two elements", () => {
		const nums = [1, 3];
		const expected1 = new TreeNode(1, null, new TreeNode(3));
		expect(sortedArrayToBST(nums)).toEqual(expected1);
	});
});
