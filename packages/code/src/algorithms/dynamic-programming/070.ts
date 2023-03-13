// DFS
export function climbStairs1(n: number): number {
  if (n < 3)
    return n

  return climbStairs(n - 1) + climbStairs(n - 2)
}

// DP
// inital: dp[0] = 0, dp[1] = 1, dp[2] = 2
// equation: dp[i] = dp[i - 1] + dp[i - 2]
export function climbStairs2(n: number): number {
  const dp: number[] = [0, 1, 2]
  for (let i = 3; i <= n; i++)
    dp[i] = dp[i - 1] + dp[i - 2]

  return dp[n]
}

// scroll array
export function climbStairs(n: number): number {
  if (n < 3)
    return n

  let p = 0
  let q = 1
  let t = 2

  for (let i = 3; i <= n; i++) {
    p = q + t
    q = t
    t = p
  }

  return p
}
