/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const n = height.length
  let i = 0
  let j = n - 1
  let left_max = 0
  let right_max = 0
  let sum = 0
  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] >= left_max)
        left_max = height[i]
      else sum += left_max - height[i]
      i++
    }
    else {
      if (height[j] >= right_max)
        right_max = height[j]
      else sum += right_max - height[j]
      j--
    }
  }
  return sum
}
// @lc code=end
