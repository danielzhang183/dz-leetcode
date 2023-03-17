export function wordPattern(pattern: string, s: string): boolean {
  const ss = s.split(' ')
  const p2s: Record<string, string> = {}
  const s2p: Record<string, string> = {}

  for (let i = 0; i < pattern.length; i++) {
    const [x, y] = [pattern[i], ss[i]]
    if ((p2s[x] && p2s[x] !== y) || (s2p[y] && s2p[y] !== x))
      return false
    p2s[x] = y
    s2p[y] = x
  }

  return true
}
