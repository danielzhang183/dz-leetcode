/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  const count = new Array(n).fill(1)
  let max = 1; let ret = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) { // i节点有1个最长序列
          dp[i] = dp[j] + 1
          count[i] = count[j]
        }
        else if (dp[j] + 1 === dp[i]) { // i节点有多个最长序列
          count[i] = count[i] + count[j]
        }
      }
    }
    max = Math.max(max, dp[i])
  }
  for (let i = 0; i < n; i++) {
    if (dp[i] === max)
      ret += count[i]
  }

  return ret
}
// @lc code=end
