/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const trueItem = Math.abs(nums[i])
    if (nums[trueItem] < 0)
      return trueItem
    nums[trueItem] = -nums[trueItem]
  }
}
// @lc code=end
