/* eslint-disable no-console */
import c from 'picocolors'
import type { RuntimeErrorLog } from 'dz-leetcode'

export function printErrorLogs(logs: RuntimeErrorLog[]) {
  if (!logs.length) {
    console.log()
    console.log(c.inverse(c.bold(c.green(' DZ LEETCODE '))) + c.green(' No generate errors found'))
    return
  }

  console.error()
  console.error(c.inverse(c.bold(c.red(' DZ LEETCODE '))) + c.red(` ${logs.length} generate errors found`))
  logs.forEach((log, idx) => {
    console.error(c.yellow(`\n--- Error ${idx + 1} -------- ${c.gray(new Date(log.timestamp).toLocaleTimeString())} ---`))
    console.log(log.error)
  })
}
