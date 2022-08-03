/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxSoFar = 0; let left = 0; let right = height.length - 1
  while (left < right) {
    const minHeight = Math.min(height[left], height[right])
    const area = minHeight * (right - left)
    if (area > maxSoFar)
      maxSoFar = area
    if (minHeight === height[left])
      left++
    else right--
  }
  return maxSoFar
}
// @lc code=end
