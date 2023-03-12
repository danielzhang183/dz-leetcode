export function findMinArrowShots1(points: number[][]): number {
  if (!points.length)
    return 0

  points.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]))

  let count = 1
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= points[i - 1][1])
      points[i][1] = Math.min(points[i - 1][1], points[i][1])
    else
      count++
  }

  return count
}

export function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1])

  const n = points.length
  let count = 0
  let i = 0

  while (i < n) {
    const right = points[i][1]
    i++

    while (i < n && points[i][0] <= right)
      i++
    count++
  }

  return count
}

findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])
