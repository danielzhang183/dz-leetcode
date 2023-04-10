// Two Pointers
export function sortArrayByParityII(nums: number[]): number[] {
  const n = nums.length
  let j = 1

  for (let i = 0; i < n; i += 2) {
    if (nums[i] & 1) {
      while (nums[j] & 1)
        j += 2
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  return nums
}

sortArrayByParityII([4, 2, 5, 7])
// [4,5,2,7] [4,7,2,5], [2,5,4,7], [2,7,4,5]
