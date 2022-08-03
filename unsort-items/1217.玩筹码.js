/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function (position) {
  const n = position.length
  const sum = []
  for (let i = 0; i < n; i++)
    sum[position[i]] = (sum[position[i]] || 0) + 1

  console.log(sum)
}
// @lc code=end
