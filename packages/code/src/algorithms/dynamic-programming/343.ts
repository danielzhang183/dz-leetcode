// DP
// initial:  dp = [0, 0, 1..., 0]
// equation: max(
//    1 * dp[i - 1],   1 * (i - 1)
//    2 * dp[i - 2],   2 * (i - 2)
//    ...
//  2/n * dp[i - 2/n], 2/n * (i - 2/n)
// )
export function integerBreak(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    let max = 0
    for (let j = 1; j <= (i >> 1); j++)
      max = Math.max(max, j * dp[i - j], j * (i - j))

    dp[i] = max
  }
  return dp[n]
}

integerBreak(10)
