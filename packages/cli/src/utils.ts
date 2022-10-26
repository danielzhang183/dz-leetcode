const unknownRE = /^unknown/
export const isUnknown = (val: string): boolean => unknownRE.test(val)
