export function searchInsert(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] > target)
      r = mid - 1
    else if (nums[mid] < target)
      l = mid + 1
    else
      return mid
  }

  return l
}
