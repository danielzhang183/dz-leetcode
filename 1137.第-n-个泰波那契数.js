/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
  if (n === 0)
    return 0
  if (n === 1)
    return 1
  let p = 0; let q = 0; let r = 0; let t = 1
  for (let i = 1; i < n; i++) {
    p = q
    q = r
    r = t
    t = p + q + r
  }
  return t
}
// @lc code=end
