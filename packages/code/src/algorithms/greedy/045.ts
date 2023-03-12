export function jump(nums: number[]): number {
  let curr = 0
  let next = 0
  let step = 0

  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(next, nums[i] + i)

    if (i === curr) {
      curr = next
      step++
    }
  }

  return step
}
