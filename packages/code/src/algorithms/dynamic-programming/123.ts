// DP
// [ 0, -1, 0, -1, 0 ]
// [ 0, -1, 1, -1, 1 ]
// [ 0, -1, 2, -1, 2 ]
// [ 0, -1, 3, -1, 3 ]
// [ 0, -1, 4, -1, 4 ]
export function maxProfit1(prices: number[]): number {
  const dp: number[][] = [[0, -prices[0], 0, -prices[0], 0]]
  const len = prices.length

  for (let i = 1; i < len; i++) {
    dp[i] = [0]
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
  }

  return dp[len - 1][4]
}

export function maxProfit(prices: number[]): number {
  const dp: number[] = [0, -prices[0], 0, -prices[0], 0]
  const len = prices.length

  for (let i = 1; i < len; i++) {
    dp[1] = Math.max(dp[1], dp[0] - prices[i])
    dp[2] = Math.max(dp[2], dp[1] + prices[i])
    dp[3] = Math.max(dp[3], dp[2] - prices[i])
    dp[4] = Math.max(dp[4], dp[3] + prices[i])
  }

  return dp[4]
}

maxProfit([1, 2, 3, 4, 5])
