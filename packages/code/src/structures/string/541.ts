// DFS
export function reverseStr(s: string, k: number): string {
  const len = s.length
  const ss: string[] = [...s]
  const reverse = (s: string[], i: number, j: number) => {
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
    }
  }

  for (let i = 0; i < len; i += (2 * k)) {
    if (i + k <= len)
      reverse(ss, i, i + k - 1)
    else
      reverse(ss, i, len - 1)
  }

  return ss.join('')
}

reverseStr('abcdefg', 2)
