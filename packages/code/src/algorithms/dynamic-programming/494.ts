export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((a, b) => a + b, 0)
  const diff = sum - target

  if (diff < 0 || diff & 1)
    return 0

  const neg = diff >> 1
  const dp: number[] = new Array(neg + 1).fill(0)
  dp[0] = 1
  for (const num of nums) {
    for (let j = neg; j >= num; j--)
      dp[j] += dp[j - num]
  }

  return dp[neg]
}

findTargetSumWays([1, 1, 1, 1, 1], 3)
