export function isPalindrome(s: string): boolean {
  s = s.replace(/[_\W]/g, '').toLowerCase()
  if (!s.length)
    return true

  let i = 0
  let j = s.length - 1
  while (i < j && (s[i] === s[j])) {
    i++
    j--
  }

  return i >= j
}
