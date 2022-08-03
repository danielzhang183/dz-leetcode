/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  const n = nums.length
  if (n < 3)
    return []
  const ret = []
  for (let k = 0; k < n - 2; k++) {
    if (nums[k] > 0)
      break
    if (k > 0 && nums[k] === nums[k - 1])
      continue
    let i = k + 1; let j = n - 1
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j]
      if (sum < 0) { while (i < j && nums[i] === nums[++i]); }
      else if (sum > 0) { while (i < j && nums[j] === nums[--j]); }
      else {
        ret.push([nums[k], nums[i], nums[j]])
        while (i < j && nums[i] === nums[++i]);
        while (i < j && nums[j] === nums[--j]);
      }
    }
  }
  return ret
}
// @lc code=end
