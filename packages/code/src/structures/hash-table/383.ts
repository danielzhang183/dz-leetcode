export function canConstruct(ransomNote: string, magazine: string): boolean {
  const table = new Array(26).fill(0)

  for (let i = 0; i < magazine.length; i++)
    table[magazine.codePointAt(i)! - 'a'.codePointAt(0)!]++

  for (let i = 0; i < ransomNote.length; i++) {
    if (--table[ransomNote.codePointAt(i)! - 'a'.codePointAt(0)!] < 0)
      return false
  }

  return true
}
