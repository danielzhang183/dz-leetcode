export function maxSubArray(nums: number[]): number {
  let sum = 0
  let maxSoFar = 0
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i])
    if (sum > maxSoFar)
      maxSoFar = sum
  }
  return maxSoFar
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
