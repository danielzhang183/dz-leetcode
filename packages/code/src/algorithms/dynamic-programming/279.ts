export function numSquares(n: number): number {
  const nums = Array.from(
    { length: Math.floor(Math.sqrt(n)) },
    (_, i) => (i + 1) ** 2,
  )
  const dp: number[] = new Array(n + 1).fill(n + 1)
  dp[0] = 0
  for (const num of nums) {
    // console.log({ start: num })
    for (let j = num; j <= n; j++)
      dp[j] = Math.min(dp[j - num] + 1, dp[j])
      // console.log(dp)

    // console.log({ end: num })
  }

  return dp[n]
}

export function numSquares1(n: number): number {
  const nums = Array.from(
    { length: Math.floor(Math.sqrt(n)) },
    (_, i) => (i + 1) ** 2,
  )
  const dp: number[] = new Array(n + 1).fill(n + 1)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    // console.log({ start: i })
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j])
        dp[i] = Math.min(dp[i - nums[j]] + 1, dp[i])
        // console.log(dp)
    }
    // console.log({ end: i })
  }

  return dp[n]
}

numSquares(12)
