function isPalindrome(s: string, start: number, end: number): boolean {
  while (start < end && (s[start] === s[end])) {
    start++
    end--
  }
  return start >= end
}

export function partition(s: string): string[][] {
  const ans: string[][] = []
  const path: string[] = []

  const dfs = (s: string, begin: number) => {
    if (begin >= s.length) {
      ans.push([...path])
      return
    }

    for (let i = begin; i < s.length; i++) {
      if (!isPalindrome(s, begin, i))
        continue

      path.push(s.substring(begin, i + 1))
      console.log('before: ', path)
      dfs(s, i + 1)
      path.pop()
      // console.log('after: ', path)
    }
  }

  dfs(s, 0)
  return ans
}
