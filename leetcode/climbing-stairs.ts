/** Very helpful explanation, very thorought
 * Ref: https://leetcode.com/problems/climbing-stairs/solutions/3399534/one-liner-javascript-typescript-solution-with-recursion/
 *
 * Using Recursion
 * Anything after 3 will have more steps than it's actual value
 * for example, a 3, will have three steps:
 * 1. 1 + 1 + 1
 * 2. 1 + 2
 * 3. 2 + 1 */
export function climbStairs(n: number): number {
  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
}
