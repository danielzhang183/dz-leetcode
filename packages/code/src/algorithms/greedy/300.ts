// Greedy
export function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  if (n === 0)
    return 0

  const dp: number[] = [0, nums[0]]
  const binarySearch = (left: number, right: number, target: number) => {
    let pos = 0
    while (left < right) {
      const mid = (left + right) >> 1
      if (dp[mid] < target) {
        pos = mid
        left = mid + 1
      }
      else {
        right = mid - 1
      }
    }

    return pos
  }

  let len = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] > dp[len]) {
      dp[++len] = nums[i]
    }
    else {
      const pos = binarySearch(1, len, nums[i])
      dp[pos + 1] = nums[i]
    }
  }

  return dp.length - 1
}

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
