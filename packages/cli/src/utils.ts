const unknownRE = /^unknown/
export const isUnknown = (val: string): boolean => unknownRE.test(val)

export function now() {
  return Date.now()
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
  const rand = randRange(min, max)
  const randMin = min + rand * distance
  const randMax = randMin + distance

  return randRange(randMin, randMax > max ? max : randMax)
}
