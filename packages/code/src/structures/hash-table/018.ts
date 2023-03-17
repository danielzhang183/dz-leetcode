export function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length
  if (n < 4)
    return []

  nums.sort((a, b) => a - b)
  const ans: number[][] = []

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1])
      continue
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target)
      break
    if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target)
      continue

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1])
        continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target)
        break
      if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target)
        continue

      let left = j + 1
      let right = n - 1
      while (left < right) {
        const fourSum = nums[i] + nums[j] + nums[left] + nums[right]
        if (fourSum > target) {
          right--
        }
        else if (fourSum < target) {
          left++
        }
        else {
          ans.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1])
            left++
          while (left < right && nums[left] === nums[right - 1])
            right--
          left++
          right--
        }
      }
    }
  }

  return ans
}

// fourSum([1, 0, -1, 0, -2, 2], 0)
// fourSum([-2, 0, 5, -1, -5, 5, 3], -2)
// fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)
fourSum([1, 0, -1, 0, -2, 2], 0)
