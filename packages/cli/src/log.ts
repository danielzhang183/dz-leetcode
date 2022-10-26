/* eslint-disable no-console */
import c from 'picocolors'
import { MultiBar, Presets } from 'cli-progress'
import type { RuntimeErrorLog } from 'dz-leetcode'
import type { Options } from './types'
import { visualLength, visualPadEnd, visualPadStart } from './render'

export function createMultiProgresBar() {
  return new MultiBar({
    clearOnComplete: true,
    hideCursor: true,
    format: `{type} {bar} {value}/{total} ${c.gray('{name}')}`,
    linewrap: false,
    barsize: 40,
  }, Presets.shades_grey)
}

export class TableLogger {
  private options: Options
  private rows: (string[] | string)[] = []

  constructor(options: Partial<Options> = {}) {
    const {
      columns = 3,
      pending = 2,
      align = '',
      logLevel = 'error',
    } = options

    this.options = {
      columns,
      pending,
      align,
      logLevel,
    }
  }

  row(...args: string[]) {
    this.rows.push(args)
  }

  log(string = '') {
    this.rows.push(string)
  }

  error(string = '') {
    // if (shouldLog(this.options.loglevel, 'error'))
    this.rows.push(string)
  }

  output() {
    if (this.options.logLevel === 'silent')
      return

    const { columns, align, pending } = this.options
    const columnsWidth = new Array(columns).fill(0)

    // calc the max width of columns
    this.rows.forEach((line) => {
      if (typeof line === 'string')
        return
      for (let i = 0; i < columns; i++)
        columnsWidth[i] = Math.max(columnsWidth[i], visualLength(line[i] || ''))
    })

    // print
    this.rows.forEach((line) => {
      if (typeof line === 'string') {
        process.stdout.write(`${line}\n`)
        return
      }

      for (let i = 0; i < columns; i++) {
        const pad = align[i] === 'R' ? visualPadStart : visualPadEnd
        const part = line[i] || ''
        process.stdout.write(pad(part, columnsWidth[i] + pending))
      }
      process.stdout.write('\n')
    })

    // clear rows for next use
    this.rows = []
  }
}

export function wrapJoin(strs: string[], delimiter: string, width: number): string[] {
  const lines: string[] = []
  let line = ''
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    if (line && visualLength(line + str) > width) {
      lines.push(line)
      line = ''
    }
    line += str
    if (i < strs.length - 1)
      line += delimiter
  }
  lines.push(line)
  return lines
}

export function printErrorLogs(logs: RuntimeErrorLog | RuntimeErrorLog[]) {
  logs = Array.isArray(logs) ? logs : [logs]
  if (!logs.length) {
    console.log()
    console.log(c.inverse(c.bold(c.green(' DZ LEETCODE '))) + c.green(' No generate errors found'))
    return
  }

  console.error()
  console.error(c.inverse(c.bold(c.red(' ERROR '))) + c.red(` ${logs.length} generate errors found`))
  logs.forEach((log, idx) => {
    console.error(c.yellow(`\n--- Error ${idx + 1} -------- ${c.gray(new Date(log.timestamp).toLocaleTimeString())} ---`))
    console.log(log.error)
  })
  console.error()
}