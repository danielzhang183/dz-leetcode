export function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length
  if (n < 4)
    return []

  nums.sort((a, b) => a - b)
  const ans: number[][] = []
  for (let i = 0; i < n; i++) {
    // pruning
    if (i > 0 && nums[i] === nums[i - 1])
      continue
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target)
      break
    if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target)
      continue

    for (let j = i + 1; j < n; j++) {
      // pruning
      if (j > i + 1 && nums[j] === nums[j - 1])
        continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target)
        break
      if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target)
        continue

      // two pointers
      let l = j + 1
      let r = n - 1
      while (l < r) {
        const fourSum = nums[i] + nums[j] + nums[l] + nums[r]
        if (fourSum < target) {
          l++
        }
        else if (fourSum > target) {
          r--
        }
        else {
          ans.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[l + 1]) l++
          while (l < r && nums[r] === nums[r - 1]) r--
          l++
          r--
        }
      }
    }
  }

  return ans
}
