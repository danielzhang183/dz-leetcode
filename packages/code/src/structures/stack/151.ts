export function reverseWords(s: string): string {
  return s.split(' ').filter(i => i).reverse().join(' ')
}
