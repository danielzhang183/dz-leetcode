export function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[r] > nums[mid])
      r = mid
    else
      l = mid + 1
  }

  return nums[l]
}
