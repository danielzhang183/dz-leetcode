// 滚动 array
export function fib1(n: number): number {
  if (n <= 1)
    return n

  let prev = 0
  let cur = 1

  for (let i = 2; i <= n; i++) {
    const tmp = prev + cur
    prev = cur
    cur = tmp
  }

  return cur
}

// DFS
export function fib2(n: number): number {
  if (n <= 1)
    return n

  return fib(n - 1) + fib(n - 2)
}

// DP
// dp[i] = dp[i - 1] + dp[i - 2]
export function fib(n: number): number {
  const dp: number[] = [0, 1]
  for (let i = 2; i <= n; i++)
    dp[i] = dp[i - 1] + dp[i - 2]

  return dp[n]
}
