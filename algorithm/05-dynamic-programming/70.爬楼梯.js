/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  // if (n === 1) return 1
  // if (n === 2) return 2
  // return climbStairs(n - 2) + climbStairs(n - 1)
  let p = 0; let q = 0; let r = 1
  for (let i = 1; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}
// @lc code=end
