/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  const n = prices.length
  if (!prices || prices.length < 2 || k === 0)
    return 0

  const buy = new Array(k + 1).fill(prices[0])
  const sell = new Array(k + 1).fill(0)
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      buy[j] = Math.min(buy[j], prices[i] - sell[j - 1])
      sell[j] = Math.max(sell[j], prices[i] - buy[j])
    }
  }
  return sell[k]
}
// @lc code=end
