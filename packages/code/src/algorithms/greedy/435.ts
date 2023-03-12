// sort by right
export function eraseOverlapIntervals1(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1])

  let count = 0
  let right = intervals[0][1]
  const len = intervals.length
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= right) {
      count++
      right = intervals[i][1]
    }
  }

  return len - count - 1
}

// sort by left
export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0])

  let count = 0
  let right = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    const tmp = intervals[i]
    if (tmp[0] >= right) {
      right = tmp[1]
    }
    else {
      right = Math.min(right, tmp[1])
      count++
    }
  }

  return count
}

eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]])
