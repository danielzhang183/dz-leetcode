export function commonChars(words: string[]): string[] {
  const minFeq = new Array(26).fill(Infinity)
  const a = 'a'.charCodeAt(0)
  const feq = new Array(26)

  for (const word of words) {
    feq.fill(0)
    for (const c of word)
      feq[c.charCodeAt(0) - a]++

    for (let i = 0; i < 26; i++)
      minFeq[i] = Math.min(minFeq[i], feq[i])
  }

  let ans = ''
  for (let i = 0; i < 26; i++) {
    if (minFeq[i])
      ans += String.fromCharCode(i + a).repeat(minFeq[i])
  }
  return ans.split('')
}

commonChars(["acabcddd", "bcbdbcbd", "baddbadb", "cbdddcac", "aacbcccd", "ccccddda", "cababaab", "addcaccd"])
