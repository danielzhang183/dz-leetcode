export function isIsomorphic1(s: string, t: string): boolean {
  const s2t: Record<string, string> = {}
  const t2s: Record<string, string> = {}
  let x: string
  let y: string
  for (let i = 0; i < s.length; i++) {
    x = s[i]
    y = t[i]

    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x))
      return false

    s2t[x] = y
    t2s[y] = x
  }

  return true
}

export function isIsomorphic(s: string, t: string): boolean {
  const mapS = new Map<string, number>()
  const mapT = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    const [charS, charT] = [s[i], t[i]]
    const [boolS, boolT] = [mapS.has(charS), mapT.has(charT)]

    if (boolS !== boolT)
      return false

    if (boolS && mapS.get(charS) !== mapT.get(charT))
      return false

    mapS.set(charS, i)
    mapT.set(charT, i)
  }

  return true
}

isIsomorphic('egg', 'add')
