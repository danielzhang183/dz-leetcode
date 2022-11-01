export * from './dark'
export * from './date'
export * from './language'
export * from './questions'
export * from './difficulty'
export * from './sort'

const simplifyRE = /(\w)\w+-(\w)\w+/g
export const simplize = (str: string) => str.replace(simplifyRE, (_, c1, c2) => `${c1.toUpperCase()}${c2.toUpperCase()}`)

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
