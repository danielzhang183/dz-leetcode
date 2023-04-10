export function searchRange(nums: number[], target: number): number[] {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] > target) {
      r--
    }
    else if (nums[mid] < target) {
      l++
    }
    else {
      let i = mid
      let j = mid
      while (i >= 0 && nums[i] === nums[--i]);
      while (j <= n && nums[j] === nums[++j]);
      return [i + 1, j - 1]
    }
  }

  return nums[l] === target ? [l, l] : [-1, -1]
}

// searchRange([5, 7, 7, 8, 8, 10], 8)
