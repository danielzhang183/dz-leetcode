export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = Array.from(
    { length: m },
    () => Array.from({ length: n }).fill(0),
  ) as number[][]
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++)
    dp[i][0] = 1
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++)
    dp[0][j] = 1

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j])
        continue
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

uniquePathsWithObstacles([[0, 0]])
