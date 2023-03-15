export function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const curr = i + 1
    if (curr % 15 === 0)
      return 'FizzBuzz'
    else if (curr % 3 === 0)
      return 'Fizz'
    else if (curr % 5 === 0)
      return 'Buzz'
    else
      return String(curr)
  })
}
