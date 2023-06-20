import { TreeNode } from "../types";
import { Queue } from "typescript-collections";

// Depth First Search
export function maxDepth(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}

	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Iterative Depth First Search
export function maxDepth_DFS(root: TreeNode | null): number {
	let stack: [TreeNode | null, number][] = [[root, 1]];
	let lvl = 0;

	while (stack.length > 0) {
		let [node, depth] = stack.pop()!;
		if (node) {
			lvl = Math.max(lvl, depth);
			stack.push([node.left, depth + 1]);
			stack.push([node.right, depth + 1]);
		}
	}
	return lvl;
}

// Iterative Breath First Search
export function maxDepth_BFS(root: TreeNode | null): number {
	if (!root) return 0;

	let lvl = 0;
	let queue = new Queue<TreeNode>();
	queue.add(root);
	while (queue.size()) {
		for (let i = 0; i < queue.size(); ++i) {
			let node = queue.dequeue();
			if (node?.left) {
				queue.add(node.left);
			}
			if (node?.right) {
				queue.add(node.right);
			}
		}
		lvl++;
	}
	return lvl;
}
