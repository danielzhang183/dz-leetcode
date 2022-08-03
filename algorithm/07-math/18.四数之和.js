/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const n = nums.length
  if (n < 4)
    return
  nums = nums.sort((a, b) => a - b)
  for (let a = 0; a < n - 3; i++) {
    if (a > 0 && nums[a] === nums[a - 1])
      continue

    let i = a + 1; const j = n - 1
    while (i < j - 1) {
      sum += nums[a] + nums[i] + nums[j - 1] + nums[j]
      if (sum < target)
        while (i < j - 1 && nums[i] === nums[++i]);
      else if (sum > target)
        while (i < j - 1 && nums[i] === nums[++i]);
      else
        ret
    }
  }
}
// @lc code=end
