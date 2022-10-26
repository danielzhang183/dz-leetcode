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
  .option('-lang, --language <language>', 'zh|zh-CN|en|en-US')
  .help()

cli
  .command('file <file>')
  .action(file)

cli
  .command('pink <title | id<,title<, id>>>')
  .action(pick)

cli
  .command('')
  .action(() => {
    cli.outputHelp()
  })

cli.parse()

export interface CliOptionBase {
  root?: string
  lang?: 'zh' | 'zh-CN' | 'en' | 'en-US'
}

export interface FileCliOptions extends CliOptionBase {
}

export interface PickCliOptions extends CliOptionBase {
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

async function pick(identifier: string, options: PickCliOptions) {
  await generateFromCommand({
    logLevel: 'log',
    identifier,
    ...options,
  })
}
