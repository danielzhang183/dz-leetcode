const unknownRE = /^unknown/
export const isUnknown = (val: string): boolean => unknownRE.test(val)
export const isString = (val: unknown): val is string => typeof val === 'string'

export function now() {
  return +Date.now()
}

export function randRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

export function randDistanceRange(min: number, max: number, distance = 100): number {
  if (max < distance)
    return randRange(min, max)

  if (min > distance)
    min = Math.floor(min / distance)
  max = Math.round(max / distance)

  return randRange(min, max) * distance
}
