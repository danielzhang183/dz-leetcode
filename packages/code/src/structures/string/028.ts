// KMP
export function strStr1(haystack: string, needle: string): number {
  const n1 = haystack.length
  const n2 = needle.length
  if (!n2)
    return -1

  const next = new Array(n2).fill(-1)
  for (let i = 1, j = -1; i < n2; i++) {
    while (j !== -1 && needle[i] !== needle[j + 1])
      j = next[j]

    if (needle[i] === needle[j + 1])
      j++

    next[i] = j
  }

  for (let i = 0, j = -1; i < n1; i++) {
    while (j !== -1 && haystack[i] !== needle[j + 1])
      j = next[j]

    if (haystack[i] === needle[j + 1])
      j++

    if (j === n2 - 1)
      return i - n2 + 1
  }

  return -1
}

// Sunday
export function strStr2(haystack: string, needle: string): number {
  const n1 = haystack.length
  const n2 = needle.length
  const next: Record<string, number> = {}

  for (let i = 0; i < n2; i++)
    next[needle[i]] = n2 - i

  let i = 0
  let j: number

  while (i <= n1 - n2) {
    j = 0
    while (haystack[i + j] === needle[j]) {
      if (++j >= n2)
        return i
    }
    i += next[haystack[i + n2]] || n2 + 1
  }

  return -1
}

// API
export function strStr(haystack: string, needle: string): number {
  // return haystack.indexOf(needle)
  return haystack.match(needle)?.index ?? -1
}
