/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let l = 0; let r = nums.length - 1; let mid
  while (l < r) {
    mid = l + (r - l) / 2 | 0
    if (nums[mid] === target) {
      let i = mid; let j = mid
      while (i >= 0 && nums[i] === nums[--i]);
      while (j <= r && nums[j] === nums[++j]);
      return [i + 1, j - 1]
    }
    else if (nums[mid] < target) { l = mid + 1 }
    else { r = mid }
  }
  return nums[l] === target ? [l, l] : [-1, -1]
}
// @lc code=end
