/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
const maxScoreSightseeingPair = function (values) {
  let ans = 0; let max = values[0] + 0
  for (let i = 1; i < values.length; i++) {
    ans = Math.max(ans, max + values[i] - i)
    max = Math.max(max, values[i] + i)
  }
  return ans
}
// @lc code=end
