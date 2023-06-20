import { TreeNode } from "../types";

export function inorderTraversal(root: TreeNode | null): number[] {
	let path: number[] = [];
	traverse(root, path);
	return path;
}

function traverse(node: TreeNode | null, path: number[]) {
	if (!node) {
		return path;
	}

	traverse(node?.left, path);
	path.push(node?.val);
	traverse(node?.right, path);
}
