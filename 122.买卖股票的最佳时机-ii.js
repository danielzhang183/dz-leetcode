/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1])
      max += prices[i] - prices[i - 1]
  }
  return max
}
// @lc code=end
