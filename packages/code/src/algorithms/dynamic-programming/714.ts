// DP
// two-dimensional array
export function maxProfit1(prices: number[], fee: number): number {
  const dp: number[][] = [[-prices[0], 0]]
  const n = prices.length
  for (let i = 1; i < n; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
  }

  return dp[n - 1][1]
}

// one-dimensional scroll array
export function maxProfit2(prices: number[], fee: number): number {
  let [buy, sell] = [-prices[0], 0]
  for (let i = 1; i < prices.length; i++) {
    [buy, sell] = [
      Math.max(buy, sell - prices[i]),
      Math.max(sell, buy + prices[i] - fee),
    ]
  }

  return sell
}

// Greedy
export function maxProfit(prices: number[], fee: number): number {
  let buy = prices[0] + fee
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] + fee < buy) {
      buy = prices[i] + fee
    }
    else if (prices[i] > buy) {
      profit += prices[i] - buy
      buy = prices[i]
    }
  }

  return profit
}

maxProfit([1, 3, 2, 8, 4, 9], 2)
