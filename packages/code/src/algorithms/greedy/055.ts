export function canJump(nums: number[]): boolean {
  const len = nums.length
  let max = 0

  for (let i = 0; i < len; i++) {
    if (i <= max) {
      max = Math.max(nums[i] + i, max)

      if (max >= len - 1)
        return true
    }
  }

  return false
}

canJump([2, 3, 1, 1, 4])
// canJump([3, 2, 1, 0, 4])
