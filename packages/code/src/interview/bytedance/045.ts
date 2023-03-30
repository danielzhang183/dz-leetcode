export function jump(nums: number[]): number {
  let max = 0
  let curr = 0
  let step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i)

    if (i === curr) {
      curr = max
      step++
    }
  }

  return step
}
