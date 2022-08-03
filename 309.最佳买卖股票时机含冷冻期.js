/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const n = prices.length
  if (!prices || prices < 2)
    return 0
  // f[i][0]: 手上持有股票的最大收益
  // f[i][1]: 手上不持有股票，并且处于冷冻期中的累计最大收益
  // f[i][2]: 手上不持有股票，并且不在冷冻期中的累计最大收益
  const f = [new Array(n), new Array(3).fill(0)]
  console.log(f)
  f[0][0] = -prices[0]
  for (let i = 1; i < n; ++i) {
    f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i])
    f[i][1] = f[i - 1][0] + prices[i]
    f[i][2] = Math.max(f[i - 1][1], f[i - 1][2])
  }
  return Math.max(f[n - 1][1], f[n - 1][2])
}
// @lc code=end
