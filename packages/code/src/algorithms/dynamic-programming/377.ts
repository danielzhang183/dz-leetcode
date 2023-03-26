export function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0)
  dp[0] = 1

  const len = nums.length
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < len; j++) {
      if (i >= nums[j])
        dp[i] += dp[i - nums[j]]
    }
  }

  return dp[target]
}

combinationSum4([1, 2, 3], 4)
