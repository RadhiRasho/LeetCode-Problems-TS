export function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
