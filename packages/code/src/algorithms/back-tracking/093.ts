export function restoreIpAddresses(s: string): string[] {
  const ans: string[] = []
  const path: string[] = []

  const isValidIp = (ip: string): boolean => {
    if ((ip.length > 1 && ip.startsWith('0')) || Number(ip) > 255)
      return false
    return true
  }

  const dfs = (s: string, begin: number) => {
    const length = s.length
    if (begin === length && path.length === 4) {
      ans.push(path.join('.'))
      return
    }

    if (path.length === 4 || begin === length)
      return

    for (let i = begin; i < Math.min(length, begin + 3); i++) {
      const ip = s.substring(begin, i + 1)
      if (isValidIp(ip)) {
        path.push(ip)
        dfs(s, i + 1)
        path.pop()
      }
    }
  }

  dfs(s, 0)
  return ans
}

restoreIpAddresses('25525511135')
