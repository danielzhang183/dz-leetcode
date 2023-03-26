export function lastStoneWeightII(stones: number[]): number {
  const len = stones.length
  const sum = stones.reduce((a, b) => a + b, 0)
  const target = sum >> 1
  const dp = Array.from(
    { length: len },
    () => Array.from({ length: target + 1 }).fill(0),
  ) as number[][]

  for (let i = stones[0]; i <= target; i++)
    dp[0][i] = stones[0]

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = j < stones[i]
        ? dp[i - 1][j]
        : Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i])
    }
  }

  return sum - 2 * dp[len - 1][target]
}

export function lastStoneWeightII1(stones: number[]): number {
  const sum = stones.reduce((a, b) => a + b, 0)
  const target = sum >> 1
  const dp: number[] = new Array(target + 1).fill(0)

  for (const stone of stones) {
    for (let j = target; j >= stone; j--)
      dp[j] = Math.max(dp[j], dp[j - stone] + stone)
  }

  return sum - 2 * dp[target]
}

lastStoneWeightII([2, 7, 4, 1, 8, 1])
// lastStoneWeightII([31, 26, 33, 21, 40])
