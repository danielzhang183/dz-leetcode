export function maxProfit(k: number, prices: number[]): number {
  const len = 2 * k
  const dp: number[] = Array.from(
    { length: len + 1 },
    (_, i) => i & 1 ? -prices[0] : 0,
  )
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= len; j++)
      dp[j] = Math.max(dp[j], dp[j - 1] + (j & 1 ? -1 : 1) * prices[i])
  }

  return dp[len]
}

maxProfit(2, [3, 2, 6, 5, 0, 3])
