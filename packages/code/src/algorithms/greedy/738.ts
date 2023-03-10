export function monotoneIncreasingDigits(n: number): number {
  const arr = String(n).split('').map(Number)
  const len = arr.length
  let flag = len

  for (let i = len - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      arr[i] -= 1
      flag = i + 1
    }
  }

  for (let i = flag; i < len; i++)
    arr[i] = 9

  return Number(arr.join(''))
}

monotoneIncreasingDigits(10)
