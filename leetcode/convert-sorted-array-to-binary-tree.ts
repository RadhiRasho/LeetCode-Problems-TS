import { TreeNode } from "../types";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
	if (!nums || !nums.length) {
		return null;
	}

	const mid = Math.floor(nums.length / 2);
	const node = new TreeNode(nums[mid]);

	node.left = sortedArrayToBST(nums.slice(0, mid));
	node.right = sortedArrayToBST(nums.slice(mid + 1));

	return node;
}
