/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n === 0)
    return 0
  let p = 0; let q = 0; let r = 1
  for (let i = 1; i < n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}
// @lc code=end
