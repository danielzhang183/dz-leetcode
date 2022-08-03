/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0)
    return 1
  const len = Math.abs(n)
  const res = new Array(len)
    .fill(x)
    .reduce((prev, curr) => prev *= curr, 1)
  return n > 0 ? res : 1 / res
}
// @lc code=end
