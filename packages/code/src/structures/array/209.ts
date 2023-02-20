export function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0
  let start = 0
  let end = 0
  let ans = Number.MAX_SAFE_INTEGER

  while (end < nums.length) {
    sum += nums[end]

    while (sum >= target) {
      ans = Math.min(ans, end - start + 1)
      sum -= nums[start++]
    }

    end++
  }

  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans
}
