export function removeDuplicates(s: string): string {
  const stack: string[] = []

  for (const c of s) {
    const len = stack.length
    if (!len || stack[len - 1] !== c)
      stack.push(c)
    else
      stack.pop()
  }

  return stack.join('')
}
