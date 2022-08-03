/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  const n = nums.length
  let rightmost = 0
  for (let i = 0; i < n; ++i) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])
      if (rightmost >= n - 1)
        return true
    }
  }
  return false
}
// @lc code=end
