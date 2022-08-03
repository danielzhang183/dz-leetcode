/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const n = nums.length
  if (n <= 2)
    return 2
  let j = 1
  for (let i = 2; i < n; i++) {
    if (nums[i] > nums[j] || nums[i] !== nums[j - 1])
      nums[++j] = nums[i]
  }
  return j + 1
}
// @lc code=end
