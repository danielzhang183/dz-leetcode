// DFS
export function uniquePaths(m: number, n: number): number {
  const dfs = (i: number, j: number): number => {
    if (i > m || j > n)
      return 0

    if (i === m && j === n)
      return 1

    return dfs(i + 1, j) + dfs(i, j + 1)
  }

  return dfs(1, 1)
}

// DP
// initial:  dp[i][0] = 1, dp[0][i] = 1
// equation: dp[m][n] = dp[m - 1][n] + dp[m][n - 1]
export function uniquePaths1(m: number, n: number): number {
  const dp = Array.from(
    { length: m },
    () => Array.from({ length: n }).fill(1),
  ) as number[][]

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++)
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  }

  return dp[m - 1][n - 1]
}

uniquePaths(3, 3)
