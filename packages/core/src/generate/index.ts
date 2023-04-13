import { resolveConfig } from '../config'
import { writeFile } from '../io'
import { getQuestionById, getQuestionByTitle, normalizeRawQuestion } from '../question'
import type { CommonOptions, GenerateError, GenerateOptions, GenerateReturn, ResolvedQuestion } from '../types'
import { isNumber } from '../utils'
import { genCatalog, genCode, genMarkdown, genTestCase } from './gen'

export async function generate(options: GenerateOptions): Promise<GenerateReturn> {
  options = await resolveConfig(options)

  const {
    category,
    tag,
    identifier,
    lang,
    write = true, // write to file or not
    isTranslated = false, // translate to zh_CN or not
  } = options
  if (!identifier) {
    return {
      error: generateError('Give question name or id at least', category, tag),
    }
  }

  const rawQuestion = isNumber(identifier)
    ? await getQuestionById(identifier)
    : await getQuestionByTitle(identifier)
  if (!rawQuestion) {
    return {
      error: generateError(`Question ${identifier} Not Found!`, category, tag),
    }
  }

  const question = normalizeRawQuestion(
    rawQuestion,
    { category, tag, lang, isTranslated },
  )
  if (write)
    return await writeQuestion(question, options)

  return { question }
}

export function generateError(error: unknown, category = 'unknown-category', tag = 'unknown-tag'): GenerateError {
  return {
    category,
    tag,
    error,
    timestamp: Date.now(),
  }
}

export async function writeQuestion<T extends CommonOptions>(question: ResolvedQuestion, options: T): Promise<GenerateReturn> {
  const {
    onlyDoc = false,
    paths = {},
  } = options

  const gens = [
    genMarkdown(question, paths.doc),
    genCatalog(question, paths.doc),
  ]
  if (!onlyDoc) {
    gens.push(...[
      genCode(question, paths.code),
      genTestCase(question, paths.code),
    ])
  }

  try {
    // wait generate content for ready
    const resolvedGens = await Promise.all(gens)
    // write generate content to its' relative file
    const outFiles = await Promise.all(
      resolvedGens.map(async ({ outFile, content }) => {
        await writeFile(outFile, content)
        return outFile
      }),
    )
    question.outFiles = outFiles.sort()
  }
  catch (error) { // TODO: not handle carefully
    return {
      error: generateError(error, question.category, question.tag),
    }
  }

  return { question }
}
