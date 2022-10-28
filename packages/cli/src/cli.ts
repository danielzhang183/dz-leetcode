import { resolve } from 'path'
import cac from 'cac'
import { version } from '../package.json'
import { generateFromCommand, generateFromFile, generateFromRandom } from './generate'
import type { FileCliOptions, PickCliOptions, RandomCliOptions } from './types'

const cli = cac('dz-leetcode')

cli
  .version(version)
  .option('-r, --root <path>', 'root path')
  .option('-c, --category <category>', 'Question category')
  .option('-t, --tag <tag>', 'Question tag')
  .option('-lang, --lang <lang>', 'Generate file lang, default by en, zh|en')
  .option('-d, --difficulty <difficulty>', 'easy|medium|hard')
  .option('-i, --interactive <interactive>', 'interactive mode')
  .help()

cli
  .command('file <file>')
  .action(file)

cli
  .command('pick <title | id<,title<, id>>>')
  .action(pick)

cli
  .command('random')
  .action(random)

cli
  .command('')
  .action(() => {
    cli.outputHelp()
  })

cli.parse()

async function file(file: string, options: FileCliOptions) {
  const {
    root = process.cwd(),
  } = options

  const absolute = resolve(root, file)
  await generateFromFile({
    logLevel: 'log',
    file: absolute,
  })
}

async function pick(identifier: string, options: PickCliOptions) {
  await generateFromCommand({
    logLevel: 'log',
    identifier,
    ...options,
  })
}

async function random(options: RandomCliOptions) {
  await generateFromRandom({
    logLevel: 'log',
    ...options,
  })
}
