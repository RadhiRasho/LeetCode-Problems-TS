import { inorderTraversal } from "../leetcode/binary-tree-inorder-traversal";
import { TreeNode } from "../types";

describe("inorderTraversal", () => {
	test("returns correct output for Example 1", () => {
		const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
		expect(inorderTraversal(root)).toEqual([1, 3, 2]);
	});

	test("returns correct output for Example 2", () => {
		const root = null;
		expect(inorderTraversal(root)).toEqual([]);
	});

	test("returns correct output for Example 3", () => {
		const root = new TreeNode(1);
		expect(inorderTraversal(root)).toEqual([1]);
	});
});
