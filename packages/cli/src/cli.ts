import cac from 'cac'
import { resolveConfig } from 'dz-leetcode'
import { version } from '../package.json'
import {
  PACKAGE_ROOT,
  cleanup as cleanupFromCommand,
  generateFromCommand,
  generateFromFile,
  generateFromRandom,
  patchQuestionsTags,
  reset as resetFromCommand,
} from './commands'
import type { CleanupOptions, CommandOptions, FileOptions, RandomOptions } from './types'

const cli = cac('dz-leetcode')

cli
  .version(version)
  .option('-r, --root <path>', 'root path')
  .option('-c, --category <category>', 'Question category')
  .option('-t, --tag <tag>', 'Question tag')
  .option('-lang, --lang <lang>', 'Generated question syntax')
  .option('-d, --difficulty <difficulty>', 'easy|medium|hard')
  .option('-i, --interactive', 'interactive mode')
  .option('-f, --file <file>', 'import questions config file')
  .help()

cli
  .command('file')
  .action(file)

cli
  .command('pick <identifier>')
  .action(pick)

cli
  .command('random')
  .action(random)

cli
  .command('cleanup')
  .action(cleanup)

cli
  .command('reset')
  .action(reset)

cli
  .command('tags')
  .action(patchTags)

cli
  .command('')
  .action(() => {
    cli.outputHelp()
  })

cli.parse()

async function file(options: FileOptions) {
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

async function cleanup(options: CleanupOptions) {
  await cleanupFromCommand(options.root)
}

async function reset(options: CleanupOptions) {
  await resetFromCommand(
    await resolveConfig(options),
  )
}

async function patchTags() {
  await patchQuestionsTags()
}
