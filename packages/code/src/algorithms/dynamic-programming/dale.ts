export function dale(arr: string[][], n: number): number {
  arr.sort((a, b) => b.length - a.length)
  const len = arr.length
  let min = len
  const path: string[][] = []
  let set = new Set<string>()

  const dfs = (count: number, begin: number) => {
    if (count >= min || min === 1)
      return
    if (set.size >= n || path.length === len) {
      min = Math.min(min, count)
      return
    }

    for (let i = begin; i < len; i++) {
      if (min === 1)
        break
      if (arr[i].every(num => set.has(num)))
        continue

      arr[i].forEach(num => set.add(num))
      path.push(arr[i])
      dfs(count + 1, i + 1)
      path.pop()
      set = new Set(path.flat(1))
    }
  }

  dfs(0, 0)
  return min
}

// dale([['a', 'b', 'c'], ['a', 'c', 'd'], ['b', 'c', 'e']], 5)
// dale([['a'], ['b'], ['c']], 3)
// dale([['a'], ['b'], ['b', 'c']], 3)
dale([['a'], ['b'], ['a', 'b', 'c']], 3)
