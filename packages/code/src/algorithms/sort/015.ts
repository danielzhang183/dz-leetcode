export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const ans: number[][] = []
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1])
      continue
    if (nums[i] > 0)
      break
    let l = i + 1
    let r = n - 1
    while (l < r) {
      const threeSum = nums[l] + nums[r] + nums[i]
      if (threeSum < 0) {
        l++
      }
      else if (threeSum > 0) {
        r--
      }
      else {
        ans.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1])
          l++
        while (l < r && nums[r] === nums[r - 1])
          r--
        l++
        r--
      }
    }
  }

  return ans
}
