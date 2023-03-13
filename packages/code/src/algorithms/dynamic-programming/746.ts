// DP
// initial: i <= 2, Math.max(cost[0], cost[1])
// equation: dp[i+1] = dp[i] + Math.max(c)
export function minCostClimbingStairs1(cost: number[]): number {
  const dp: number[] = [0, 0]
  for (let i = 2; i <= cost.length; i++)
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

  return dp.pop()!
}

// scroll array
export function minCostClimbingStairs(cost: number[]): number {
  let p = 0
  let q = 0

  for (let i = 2; i <= cost.length; i++) {
    const tmp = Math.min(p + cost[i - 2], q + cost[i - 1])
    p = q
    q = tmp
  }

  return q
}

// minCostClimbingStairs([10, 15, 20])
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
