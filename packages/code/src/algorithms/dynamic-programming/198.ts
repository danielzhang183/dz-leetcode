// DP
export function rob1(nums: number[]): number {
  const n = nums.length
  if (n === 1)
    return nums[0]
  if (n === 2)
    return Math.max(nums[0], nums[1])
  const dp: number[] = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < n; i++)
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])

  return dp[n - 1]
}

// scroll array
export function rob(nums: number[]): number {
  const n = nums.length
  if (n === 1)
    return nums[0]
  if (n === 2)
    return Math.max(nums[0], nums[1])
  let first = nums[0]
  let second = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    const tmp = second
    second = Math.max(first + nums[i], second)
    first = tmp
  }

  return second
}
