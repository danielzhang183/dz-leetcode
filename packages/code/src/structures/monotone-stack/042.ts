export function trap1(height: number[]): number {
  const n = height.length
  if (n < 3)
    return 0
  const maxLeft = new Array(n).fill(0)
  const maxRight = new Array(n).fill(0)
  maxLeft[0] = height[0]
  for (let i = 1; i < n; i++)
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1])
  maxRight[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--)
    maxRight[i] = Math.max(height[i], maxRight[i + 1])

  let sum = 0
  for (let i = 0; i < height.length; i++) {
    const count = Math.min(maxLeft[i], maxRight[i]) - height[i]
    if (count > 0)
      sum += count
  }

  return sum
}

// two pointers
// use scroll array to optimize
export function trap(height: number[]): number {
  const n = height.length
  let [i, j] = [0, n - 1]
  let [maxLeft, maxRight] = [0, 0]
  let sum = 0

  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] >= maxLeft)
        maxLeft = height[i]
      else
        sum += maxLeft - height[i]
      i++
    }
    else {
      if (height[j] >= maxRight)
        maxRight = height[j]
      else
        sum += maxRight - height[j]
      j--
    }
  }

  return sum
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
