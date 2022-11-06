export * from './dark'
export * from './date'
export * from './language'
export * from './questions'
export * from './difficulty'
export * from './sort'

const simplifyRE = /(\w)\w+-(\w)\w+/g
export const simplify = (str: string) => str.replace(simplifyRE, (_, c1, c2) => `${c1.toUpperCase()}${c2.toUpperCase()}`)

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const camelizeRE = /-(\w)/g
export const camelize = (str: string) => str.replace(camelizeRE, (_, c) => (c ? ` ${c.toUpperCase()}` : ''))

export const normalizeName = (str: string) => capitalize(camelize(str))
