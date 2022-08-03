/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let l = 1; let r = num; let mid
  while (l <= r) {
    mid = (l + r) >> 1
    if (mid === num / mid && num % mid === 0)
      return true
    else if (mid < num / mid)
      l = mid + 1
    else r = mid
  }
  return false
}
// @lc code=end
