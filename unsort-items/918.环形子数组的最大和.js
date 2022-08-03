/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
  const n = nums.length
  max = nums[0]
  for (let i = 1; i < 2n - 1; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    max = Math.max(max, nums[i])
  }
  return max
}
// @lc code=end
