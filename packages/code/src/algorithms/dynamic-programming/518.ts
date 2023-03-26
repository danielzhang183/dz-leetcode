export function change(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let j = coin; j <= amount; j++)
      dp[j] += dp[j - coin]
  }

  return dp[amount]
}
