export function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>()
  for (const n of arr)
    map.set(n, (map.get(n) || 0) + 1)

  return new Set(map.values()).size === map.size
}
