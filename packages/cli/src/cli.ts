import { resolve } from 'path'
import cac from 'cac'
import { generate } from 'dz-leetcode'
import { version } from '../package.json'
import { usage } from './io/usage'

const cli = cac('dz-leetcode')

cli
  .version(version)
  .option('-r, --root <path>', 'root path')
  .option('-c, --category <category>', 'Question category')
  .option('-t, --tag <tag>', 'Question tag')
  .help()

cli
  .command('batch <file>')
  .action(batch)

cli
  .command('single <title | id>')
  .action(single)

cli
  .command('')
  .action(() => {
    cli.outputHelp()
  })

cli.parse()

export interface BatchCliOptions {
  root?: string
}

export interface SingleCliOptions {
  category?: string
  tag?: string
}

async function batch(file: string, options: BatchCliOptions) {
  const {
    root = process.cwd(),
  } = options

  const absolute = resolve(root, file)
  await usage({ logLevel: 'log', file: absolute })
}

async function single(titleOrId: string, options: SingleCliOptions) {
  await generate({
    identifier: /^\d+$/.test(titleOrId) ? Number(titleOrId) : titleOrId,
    ...options,
  })
}
