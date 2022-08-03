/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  // const n = cost.length
  // if (n === 1) return cost[0]
  // const dp = [cost[0], cost[1]]
  // for (let i = 2 i < n i++) {
  //   dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
  // }
  // return Math.min(dp[n - 1], dp[n - 2])
  // 滚动数组（空间）优化
  let curr = 0; let prev = 0
  for (let i = 2; i <= cost.length; i++) {
    const result = Math.min(curr + cost[i - 1], prev + cost[i - 2])
    prev = curr
    curr = result
  }
  return curr
}
// @lc code=end
