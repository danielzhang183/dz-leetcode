/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      const tmp = nums[fast]
      nums[fast] = nums[slow]
      nums[slow++] = tmp
    }
  }
  return slow--
}
// @lc code=end
