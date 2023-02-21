export function evalRPN(tokens: string[]): number {
  const map: Map<string, (a: number, b: number) => number> = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b)],
  ])
  const stack: number[] = []

  for (const token of tokens) {
    if (map.has(token)) {
      const b = Number(stack.pop())
      const a = Number(stack.pop())
      stack.push(map.get(token)!(a, b))
    }
    else {
      stack.push(Number(token))
    }
  }

  return stack[0]
}
