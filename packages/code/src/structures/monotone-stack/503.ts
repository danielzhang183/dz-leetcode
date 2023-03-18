export function nextGreaterElements(nums: number[]): number[] {
  const n: number = nums.length
  const stack: number[] = []
  const ans: number[] = new Array(n).fill(-1)
  for (let i = 0; i < n * 2 - 1; i++) {
    const index = i % n
    let top = stack[stack.length - 1]
    while (stack.length && nums[top] < nums[index]) {
      ans[top] = nums[index]
      stack.pop()
      top = stack[stack.length - 1]
    }
    if (i < n)
      stack.push(i)
  }
  return ans
}

nextGreaterElements([1, 2, 3, 4, 3])
