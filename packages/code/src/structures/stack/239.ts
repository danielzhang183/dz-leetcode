export function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length
  const q: number[] = []
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]])
      q.pop()

    q.push(i)
  }

  const ans = [nums[q[0]]]
  for (let i = k; i < n; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]])
      q.pop()
    q.push(i)
    while (q[0] <= i - k)
      q.shift()

    ans.push(nums[q[0]])
  }

  return ans
}
