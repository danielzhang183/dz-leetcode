const unknownRE = /^unknown/
export const isUnknown = (val: string): boolean => unknownRE.test(val)

export function now() {
  return Date.now()
}

export function randRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}
