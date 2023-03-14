// DP
export function maxProfit1(prices: number[]): number {
  const dp: number[][] = [[-prices[0], 0]]
  const len = prices.length
  for (let i = 1; i < len; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }

  return dp[len - 1][1]
}

// Greedy
export function maxProfit(prices: number[]): number {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1])
      profit += prices[i] - prices[i - 1]
  }

  return profit
}

maxProfit([7, 1, 5, 3, 6, 4])
