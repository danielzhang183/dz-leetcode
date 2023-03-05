/* eslint-disable no-console */
export function combine1(n: number, k: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []

  const dfs = (n: number, k: number, begin: number) => {
    if (path.length === k) {
      ans.push([...path])
      return
    }
    for (let i = begin; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      console.log('before: ', path)
      dfs(n, k, i + 1)
      path.pop()
      console.log('after: ', path)
    }
  }

  dfs(n, k, 1)
  return ans
}

export function combine2(n: number, k: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []

  const dfs = (n: number, k: number, begin: number) => {
    if (k === 0) {
      ans.push([...path])
      return
    }

    if (begin > n - k + 1)
      return

    dfs(n, k, begin + 1)
    path.push(begin)
    console.log('before: ', path)
    dfs(n, k - 1, begin + 1)
    path.pop()
    console.log('after: ', path)
  }

  dfs(n, k, 1)
  console.log({ ans })
  return ans.reverse()
}

export function combine(n: number, k: number): number[][] {
  const ans: number[][] = []
  const path: number[] = []

  const dfs = (n: number, k: number, begin: number) => {
    if (k === 0) {
      ans.push([...path])
      return
    }

    if (k > n - begin + 1)
      return

    path.push(begin)
    dfs(n, k - 1, begin + 1)
    console.log('before: ', path)
    path.pop()
    dfs(n, k, begin + 1)
    console.log('after: ', path)
  }

  dfs(n, k, 1)
  console.log({ ans })
  return ans
}

combine(4, 2)
