import { resolve } from 'path'
import cac from 'cac'
import { resolveConfig } from 'dz-leetcode'
import { version } from '../package.json'
import { generateFromCommand, generateFromFile, generateFromRandom } from './generate'
import type { CommandOptions, FileOptions, RandomOptions } from './types'

const cli = cac('dz-leetcode')

cli
  .version(version)
  .option('-r, --root <path>', 'root path')
  .option('-c, --category <category>', 'Question category')
  .option('-t, --tag <tag>', 'Question tag')
  .option('-lang, --lang <lang>', 'Generated question syntax')
  .option('-d, --difficulty <difficulty>', 'easy|medium|hard')
  .option('-i, --interactive', 'interactive mode')
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

async function file(file: string, options: FileOptions) {
  const { root = process.cwd() } = options

  const absolute = resolve(root, file)
  options.file = absolute
  await generateFromFile(
    await resolveConfig(options),
  )
}

async function pick(identifier: string, options: CommandOptions) {
  options.identifier = identifier
  await generateFromCommand(
    await resolveConfig(options),
  )
}

async function random(options: RandomOptions) {
  await generateFromRandom(
    await resolveConfig(options),
  )
}
