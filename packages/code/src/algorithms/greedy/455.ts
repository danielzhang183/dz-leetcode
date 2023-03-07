export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let j = 0
  let count = 0
  for (let i = 0; i < s.length && j < g.length; i++) {
    if (s[i] >= g[j]) {
      count++
      j++
    }
  }

  return count
}
