export function canPartition1(nums: number[]): boolean {
  const len = nums.length
  const sum = nums.reduce((a, b) => a + b, 0)
  if (len < 2 || sum & 1)
    return false

  const target = sum >> 1
  const dp: number[] = new Array(target + 1).fill(0)
  for (const num of nums) {
    for (let j = target; j >= num; j--)
      dp[j] = Math.max(dp[j], dp[j - num] + num)
  }

  return dp[target] === target
}

export function canPartition(nums: number[]): boolean {
  const len = nums.length
  const sum = nums.reduce((a, b) => a + b, 0)
  if (len < 2 || sum & 1)
    return false

  const target = sum >> 1
  const dp = Array.from(
    { length: len },
    () => Array.from({ length: target + 1 }).fill(0),
  ) as number[][]

  for (let i = nums[0]; i <= target; i++)
    dp[0][i] = nums[0]

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = j < nums[i]
        ? dp[i - 1][j]
        : Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i])
    }
  }

  return dp[len - 1][target] === target
}

canPartition([1, 5, 11, 5])
