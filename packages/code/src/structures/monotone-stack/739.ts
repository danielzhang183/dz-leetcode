export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const ans: number[] = new Array(n).fill(0)
  const stack: number[] = []
  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0
      && temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop()!
      ans[top] = i - top
    }
    stack.push(i)
  }

  return ans
}
