import { TreeNode } from "../types";

export function isSymmetric(root: TreeNode | null): boolean {
	if (!root) {
		return false;
	}

	return dfs(root?.left, root?.right);
}

function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
	if (!left && !right) {
		return true;
	}

	if (!left || !right) {
		return false;
	}

	return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left);
}
