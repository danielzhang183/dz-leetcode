/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let p0 = 0; let p1 = 0
  let tmp
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      tmp = nums[i]
      nums[i] = nums[p1]
      nums[p1] = tmp
      ++p1
    }
    else if (nums[i] === 0) {
      tmp = nums[i]
      nums[i] = nums[p0]
      nums[p0] = tmp
      if (p0 < p1) {
        tmp = nums[i]
        nums[i] = nums[p1]
        nums[p1] = tmp
      }
      ++p0
      ++p1
    }
  }
}
// @lc code=end
