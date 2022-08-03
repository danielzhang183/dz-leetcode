/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  const n = nums.length
  if (n === 1)
    return 0
  let prev = 0; let curr = 0; const ret = [max]
  for (let i = 0; i < n; i++) {
    curr = nums[i] + i
    if (curr >= n - 1)
      return ++count
    if (curr > prev)
      prev = curr
    // curr = Math.max(curr, nums[i] + i)
    // if (curr >= n - 1) return ++count
    // if (curr > prev) {
    //   count++
    //   prev = curr
    // } else continue
  }
  return 0
}
// @lc code=end
