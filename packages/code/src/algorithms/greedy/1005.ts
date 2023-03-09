export function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
  let sum = 0
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }

    sum += nums[i]
  }

  return sum + (k % 2 === 0 ? 0 : -2 * nums[len - 1])
}
