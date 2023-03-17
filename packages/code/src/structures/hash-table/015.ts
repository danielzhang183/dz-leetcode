export function threeSum(nums: number[]): number[][] {
  const ans: number[][] = []
  const n = nums.length
  if (n < 3)
    return []

  nums.sort()
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0)
      break

    if (i > 0 && nums[i] === nums[i - 1])
      continue

    let left = i + 1
    let right = n - 1
    while (left < right) {
      const threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum > 0) {
        right--
      }
      else if (threeSum < 0) {
        left++
      }
      else {
        ans.push([nums[i], nums[left], nums[right]])
        // avoid duplicate situations
        while (left < right && nums[left] === nums[left + 1])
          left++
        while (left < right && nums[right] === nums[right - 1])
          right--
        left++
        right--
      }
    }
  }

  return ans
}

threeSum([-1, 0, 1, 2, -1, -4])
