import { isSameTree } from "../leetcode/same-tree";
import { TreeNode } from "../types";

describe("isSameTree", () => {
	it("returns true for two identical trees", () => {
		const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
		const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
		expect(isSameTree(p, q)).toBe(true);
	});

	it("returns false for two trees with different structures", () => {
		const p = new TreeNode(1, new TreeNode(2), null);
		const q = new TreeNode(1, null, new TreeNode(2));
		expect(isSameTree(p, q)).toBe(false);
	});

	it("returns false for two trees with different values", () => {
		const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
		const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));
		expect(isSameTree(p, q)).toBe(false);
	});
});
