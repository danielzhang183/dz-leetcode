// greedy
export function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2)
    return nums.length

  let prevDiff = 0
  let currDiff = 0
  let count = 1
  for (let i = 0; i < nums.length - 1; i++) {
    currDiff = nums[i + 1] - nums[i]

    if ((prevDiff <= 0 && currDiff > 0)
      || (prevDiff >= 0 && currDiff < 0)
    ) {
      count++
      prevDiff = currDiff
    }
  }

  return count
}
