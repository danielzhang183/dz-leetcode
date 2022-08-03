/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0
  const dp = [prices[0]]
  for (let i = 1; i < prices.length; i++) {
    dp[i] = (dp[i - 1] < prices[i]) ? dp[i - 1] : prices[i]
    max = (prices[i] - dp[i]) > max ? prices[i] - dp[i] : max
  }
  return max
}
// @lc code=end
