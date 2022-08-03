/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let l = 0; let r = nums.length - 1; let mid
  while (l < r) {
    mid = (l + r) >> 1
    if (nums[mid] > nums[r])
      l = mid + 1
    else if (nums[mid] < nums[r])
      r = mid
    else r = r - 1
  }
  return nums[l]
}
// @lc code=end
