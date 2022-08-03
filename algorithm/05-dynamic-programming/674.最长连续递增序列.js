/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  const n = nums.length
  let ans = 0
  let start = 0
  let end = 0
  while (end < n) {
    if (end > 0 && nums[end] <= nums[end - 1])
      start = end

    end++
    ans = Math.max(ans, end - start)
  }
  return ans
}
// @lc code=end
