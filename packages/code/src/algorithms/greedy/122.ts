export function maxProfit(prices: number[]): number {
  let profit = 0
  for (let i = 1; i < prices.length; i++)
    profit += Math.max(prices[i] - prices[i - 1], 0)

  return profit
}
