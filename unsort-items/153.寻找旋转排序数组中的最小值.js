/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  const n = nums.length
  let l = 0; let r = n - 1; let mid = 0
  while (l < r) {
    mid = l + (r - l) / 2 | 0
    if (nums[mid] >= nums[r])
      l = mid + 1
    else r = mid
  }
  return nums[l]
}
// @lc code=end
