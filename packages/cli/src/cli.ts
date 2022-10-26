import { resolve } from 'path'
import cac from 'cac'
import { version } from '../package.json'
import { generateFromCommand, generateFromFile } from './generate'

const cli = cac('dz-leetcode')

cli
  .version(version)
  .option('-r, --root <path>', 'root path')
  .option('-c, --category <category>', 'Question category')
  .option('-t, --tag <tag>', 'Question tag')
  .help()

cli
  .command('file <file>')
  .action(file)

cli
  .command('gen <title | id<,title<, id>>>')
  .action(gen)

cli
  .command('')
  .action(() => {
    cli.outputHelp()
  })

cli.parse()

export interface FileCliOptions {
  root?: string
}

export interface GenCliOptions {
  root?: string
  category?: string
  tag?: string
}

async function file(file: string, options: FileCliOptions) {
  const {
    root = process.cwd(),
  } = options

  const absolute = resolve(root, file)
  await generateFromFile({ logLevel: 'log', file: absolute })
}

async function gen(identifier: string, options: GenCliOptions) {
  await generateFromCommand({
    logLevel: 'log',
    identifier,
    ...options,
  })
}
