/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length
  if (n === 1)
    return nums[0]
  if (n === 2)
    return Math.max(nums[0], nums[1])
  return Math.max(rob1(nums, 0, n - 1), rob1(nums, 1, n))
}

var rob1 = function (nums, start, end) {
  let first = nums[start]; let second = Math.max(nums[start], nums[start + 1])
  for (let i = start + 2; i < end; i++) {
    const tmp = second
    second = Math.max(second, first + nums[i])
    first = tmp
  }
  return second
}
// @lc code=end
