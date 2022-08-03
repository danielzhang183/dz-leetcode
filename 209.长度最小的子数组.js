/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  const n = nums.length
  if (n === 0)
    return 0
  let start = 0
  let end = 0
  let ans = Number.MAX_SAFE_INTEGER
  let sum = 0
  while (end < n) {
    sum += nums[end]
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans
}
// @lc code=end
