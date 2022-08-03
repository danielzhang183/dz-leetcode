/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < nums.length; i += 2)
    sum += Math.min(nums[i], nums[i + 1])

  return sum
}
// @lc code=end
