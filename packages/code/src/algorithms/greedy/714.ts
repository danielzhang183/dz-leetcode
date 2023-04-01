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
