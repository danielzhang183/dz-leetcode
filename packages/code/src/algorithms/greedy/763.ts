export function partitionLabels(s: string): number[] {
  const hash = new Array(27).fill(0)
  const n = s.length
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < n; i++)
    hash[s[i].charCodeAt(0) - a] = i

  let l = 0
  let r = 0
  const ans: number[] = []
  for (let i = 0; i < n; i++) {
    r = Math.max(r, hash[s[i].charCodeAt(0) - a])

    if (i === r) {
      ans.push(r - l + 1)
      l = i + 1
    }
  }

  return ans
}

partitionLabels('ababcbacadefegdehijhklij')
