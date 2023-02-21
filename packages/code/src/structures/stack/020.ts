export function isValid(s: string): boolean {
  const map: Map<string, string> = new Map([
    ['}', '{'],
    [')', '('],
    [']', '['],
  ])

  const stack = []
  for (const c of s) {
    if (['(', '{', '['].includes(c)) {
      stack.push(c)
    }
    else if (map.has(c)) {
      if (stack.pop() !== map.get(c))
        return false
    }
  }

  return stack.length === 0
}
