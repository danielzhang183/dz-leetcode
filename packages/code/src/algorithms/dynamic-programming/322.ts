export function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j])
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}

export function coinChange1(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (const coin of coins) {
    for (let j = coin; j <= amount; j++) {
      if (dp[j - coin] !== Infinity)
        dp[j] = Math.min(dp[j], dp[j - coin] + 1)
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

coinChange([1, 2, 5], 11)
