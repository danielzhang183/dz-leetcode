export function sortedSquares(nums: number[]): number[] {
  const n = nums.length
  const ans = new Array(n).fill(0)
  let i = 0
  let j = n - 1
  let k = n - 1
  while (i <= j) {
    if (Math.abs(nums[i]) >= nums[j]) {
      ans[k--] = nums[i] ** 2
      i++
    }
    else {
      ans[k--] = nums[j] ** 2
      j--
    }
  }

  return ans
}
