export function countSubstrings(s: string): number {
  const length: number = s.length
  let count = 0
  for (let i = 0; i < length; i++) {
    count += palindrome(s, i, i)
    count += palindrome(s, i, i + 1)
  }
  return count
}

function palindrome(s: string, left: number, right: number): number {
  let count = 0
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++
    left--
    right++
  }

  return count
}
