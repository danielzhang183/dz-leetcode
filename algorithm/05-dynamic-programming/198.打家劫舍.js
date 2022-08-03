/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length
  if (n === 1)
    return nums[0]
  // let first = nums[0], max = Math.max(nums[0], nums[1])
  // for (let i = 2; i < n; i++) {
  //   let tmp = max
  //   max = Math.max(max, nums[i] + first)
  //   first = tmp
  // }
  // return max
  const dp = [0, nums[0]]

  for (let i = 2; i <= n; i++)
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])

  return dp[n]
}
// @lc code=end
