/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  const n = nums.length
  let min = Number.MAX_SAFE_INTEGER
  for (let k = 0; k < nums.length - 2; k++) {
    if (k > 0 && nums[k] === nums[k - 1])
      continue
    let i = k + 1; let j = n - 1
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j]
      if (sum === target)
        return target
      if (Math.abs(target - sum) < Math.abs(target - min))
        min = sum
      if (sum > target)
        while (i < j && nums[j] === nums[--j]);
      else while (i < j && nums[i] === nums[++i]);
    }
  }
  return min
}
// @lc code=end
