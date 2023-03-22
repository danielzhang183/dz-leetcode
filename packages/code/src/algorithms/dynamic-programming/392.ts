// Traversal
export function isSubsequence(s: string, t: string): boolean {
  const [n1, n2] = [s.length, t.length]
  let [i, j] = [0, 0]
  while (i < n1 && j < n2) {
    while (j < n2 && s[i] !== t[j])
      j++
    i++
  }

  return i === n1
}

// DP
export function isSubsequence1(s: string, t: string): boolean {
  const [m, n] = [s.length, t.length]
  const dp: number[][] = Array.from(
    { length: m + 1 },
    () => new Array(n + 1).fill(0),
  )
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }

  return dp[m][n] === m
}
