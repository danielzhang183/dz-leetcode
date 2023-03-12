export function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2)
    return intervals

  intervals.sort((a, b) => a[0] - b[0])
  const ans: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]
    const right = ans[ans.length - 1][1]
    if (curr[0] <= right)
      ans[ans.length - 1][1] = Math.max(right, curr[1])
    else
      ans.push(curr)
  }

  return ans
}
