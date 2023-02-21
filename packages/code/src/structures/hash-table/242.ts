// hastable
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length)
    return false

  const table: number[] = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++)
    table[s.codePointAt(i)! - 'a'.codePointAt(0)!]++

  for (let i = 0; i < t.length; i++) {
    if (--table[t.codePointAt(i)! - 'a'.codePointAt(0)!] < 0)
      return false
  }

  return true
}

// sorted
// export function isAnagram(s: string, t: string): boolean {
//   return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
// }
