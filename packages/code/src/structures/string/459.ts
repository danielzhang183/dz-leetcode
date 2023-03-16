// KMP
export function repeatedSubstringPattern1(s: string): boolean {
  const n = s.length
  const next = new Array(n).fill(-1)
  for (let i = 1, j = -1; i < n; i++) {
    while (j !== -1 && s[i] !== s[j + 1])
      j = next[j]

    if (s[i] === s[j + 1])
      j++

    next[i] = j
  }

  return next[n - 1] !== -1 && n % (n - (next[n - 1] + 1)) === 0
}

// API
export function repeatedSubstringPattern(s: string): boolean {
  return s.repeat(2).slice(1, -1).includes(s)
}

repeatedSubstringPattern('abcabcabcabc')
