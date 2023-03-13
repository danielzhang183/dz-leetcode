// Greedy
export function maxProfit1(prices: number[]): number {
  let min = Number.MAX_SAFE_INTEGER
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(prices[i] - min, max)
  }

  return max
}

// DP
export function maxProfit(prices: number[]): number {
  const len = prices.length
  const dp: number[][] = [[-prices[0], 0]]
  for (let i = 1; i < len; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
  }

  return dp[len - 1][1]
}

maxProfit([7, 1, 5, 3, 6, 4])
