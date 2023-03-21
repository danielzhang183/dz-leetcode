// DP
export function rob1(nums: number[]): number {
  const n = nums.length
  if (n === 1)
    return nums[0]
  if (n === 2)
    return Math.max(nums[0], nums[1])

  const helper = (start: number, end: number) => {
    const dp: number[] = []
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i < end; i++)
      dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    return dp[dp.length - 1]
  }

  return Math.max(helper(0, n - 1), helper(1, n))
}

// scroll array
export function rob(nums: number[]): number {
  const n = nums.length
  if (n === 1)
    return nums[0]
  if (n === 2)
    return Math.max(nums[0], nums[1])

  const helper = (start: number, end: number) => {
    let first = nums[start]
    let second = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i < end; i++) {
      const tmp = second
      second = Math.max(second, first + nums[i])
      first = tmp
    }

    return second
  }

  return Math.max(helper(0, n - 1), helper(1, n))
}

rob([1, 2, 3, 1])
