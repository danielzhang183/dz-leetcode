import { resolve } from 'path'
import cac from 'cac'
import type { ImportableQuestions } from 'dz-leetcode'
import { parse, readFile, singleGenerate } from 'dz-leetcode'
import { version } from '../package.json'
import { printErrorLogs } from './log'
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
  const questions = parse<ImportableQuestions>(await readFile(absolute) || '')?.questions
  if (!questions || !questions.length) {
    printErrorLogs({
      type: 'batch-error',
      file,
      timestamp: Date.now(),
      error: `${file} has no import data!`,
    })

    return
  }

  usage({ logLevel: 'log' })
  // const logs = await Promise.all(
  //   questions.map(async (question: ImportableQuestionOptions): Promise<SingleErrorLog | void> => {
  //     return await singleGenerate(question)
  //   }))
  // const logs = await generate(absolute)
}

async function single(titleOrId: string, options: SingleCliOptions) {
  await singleGenerate(Object.assign(
    /^\d+$/.test(titleOrId)
      ? { id: Number(titleOrId) }
      : { name: titleOrId },
    options,
  ))

  // printErrorLogs(log ?? [])
}
