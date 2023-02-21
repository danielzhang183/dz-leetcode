export function simplifyPath(path: string): string {
  const stack: string[] = []

  for (const p of path.split('/')) {
    if (['', '.'].includes(p))
      continue
    else if (p === '..')
      stack.pop()
    else
      stack.push(p)
  }

  return `/${stack.join('/')}`
}
