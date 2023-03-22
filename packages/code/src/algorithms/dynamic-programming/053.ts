// DP
export function maxSubArray1(nums: number[]): number {
  const n = nums.length
  if (n === 1)
    return nums[0]

  let max = nums[0]
  const dp: number[] = [0, nums[0]]
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 1], nums[i - 1])
    max = Math.max(max, dp[i])
  }

  return max
}

// greedy
export function maxSubArray(nums: number[]): number {
  const n = nums.length
  if (n === 1)
    return nums[0]

  let max = nums[0]
  let sum = nums[0]
  for (let i = 2; i <= n; i++) {
    sum = Math.max(nums[i - 1] + sum, nums[i - 1])
    max = Math.max(max, sum)
  }

  return max
}

maxSubArray([5, 4, -1, 7, 8])
