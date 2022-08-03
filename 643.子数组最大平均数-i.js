/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  const n = nums.length
  let ans = Number.MIN_SAFE_INTEGER
  let start = 0
  let end = 0
  let sum = 0
  while (end < k) {
    sum += nums[end]
    end++
  }
  ans = Math.max(ans, sum)
  while (end < n) {
    sum -= nums[start++]
    sum += nums[end++]
    ans = Math.max(ans, sum)
  }
  return ans / k
}
// @lc code=end
