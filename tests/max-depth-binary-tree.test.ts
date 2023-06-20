import { maxDepth_DFS, maxDepth_BFS, maxDepth } from "../leetcode/max-depth-binary-tree";
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

describe("maxDepth_DFS", () => {
	it("should return 0 for null root", () => {
		expect(maxDepth_DFS(null)).toBe(0);
	});

	it("should return 1 for single node tree", () => {
		expect(maxDepth_DFS({ val: 1, left: null, right: null })).toBe(1);
	});

	it("should return correct depth for example 1", () => {
		const root = {
			val: 3,
			left: { val: 9, left: null, right: null },
			right: {
				val: 20,
				left: { val: 15, left: null, right: null },
				right: { val: 7, left: null, right: null },
			},
		};
		expect(maxDepth_DFS(root)).toBe(3);
	});

	it("should return correct depth for example 2", () => {
		const root = { val: 1, left: null, right: { val: 2, left: null, right: null } };
		expect(maxDepth_DFS(root)).toBe(2);
	});
});

describe("maxDepth_BFS", () => {
	it("should return 0 for null root", () => {
		expect(maxDepth_BFS(null)).toBe(0);
	});

	it("should return 1 for single node tree", () => {
		expect(maxDepth_BFS({ val: 1, left: null, right: null })).toBe(1);
	});

	it("should return correct depth for example 1", () => {
		const root = {
			val: 3,
			left: { val: 9, left: null, right: null },
			right: {
				val: 20,
				left: { val: 15, left: null, right: null },
				right: { val: 7, left: null, right: null },
			},
		};
		expect(maxDepth_BFS(root)).toBe(3);
	});

	it("should return correct depth for example 2", () => {
		const root = { val: 1, left: null, right: { val: 2, left: null, right: null } };
		expect(maxDepth_BFS(root)).toBe(2);
	});
});
