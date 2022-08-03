/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const n = nums.length
  // 一、动态规划
  // const dp = new Array(n)
  // dp[0] = nums[0]
  // let max = nums[0]
  // for (let i = 1; i < n; i++) {
  //   dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  //   max = Math.max(max, dp[i])
  // }
  // return max
  // 二、贪心
  let prev = nums[0]; let max = nums[0]
  for (let i = 1; i < n; i++) {
    const res = Math.max(prev + nums[i], nums[i])
    max = Math.max(res, max)
    prev = res
  }
  return max
}
// @lc code=end
