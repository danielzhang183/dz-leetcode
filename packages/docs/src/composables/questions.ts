import YAML from 'js-yaml'
import type { Difficulty } from './../types'
import { normalizeName } from './index'
import type { Module, Question, SubNav, Tag } from '~/types'

export interface RawModuleMeta {
  description?: string
  questions: Question[]
}

export interface ModuleMeta {
  key: string
  name: string
  description?: string
  total: number
  done: number
  undone: number
  link: string
  Easy: number
  Medium: number
  Hard: number
  questions: Question[]
}

const generateModuleRE = (module: Module) => new RegExp(`..\/..\/data\/${module}\/(.*?).yml`, 'i')

export function getNavs(module: Module): SubNav[] {
  const re = generateModuleRE(module)

  return Object.keys(loadModules())
    .filter(key => key.includes(module))
    .map((key) => {
      const nav = key.match(re)![1]
      return {
        name: nav,
        link: `/${module}/${nav}`,
      }
    })
}

export function getModules(module: Module): ModuleMeta[] {
  const re = generateModuleRE(module)

  return Object.entries(loadModules())
    .filter(([key, _]) => key.includes(module))
    .reduce((map, [key, val]) => {
      const tag = key.match(re)![1]
      const resolveModule = normalizeModule(loadModule(val), { key: tag, module })
      map.push(resolveModule)
      return map
    }, [] as ModuleMeta[])
}

export function getTagQuestions(module: Module, tag: Tag): Question[] {
  const modules = loadModules()
  const moduleKey = `../../data/${module}/${tag}.yml`
  return loadQuestions(modules[moduleKey])
}

export class QuestionRelation {
  deps = new Set<string>()

  constructor(
    public id: string,
    public group: 'category' | 'tag' | 'question',
    dep?: string,
  ) {
    if (dep)
      this.deps.add(dep)
  }
}

export function getQuestionsRelations() {
  const modules = loadModules()
  const moduleMap = new Map<string, QuestionRelation>()
  const tagMap = new Map<string, QuestionRelation>()
  const questionSet = new Set<QuestionRelation>()

  Object.keys(modules).forEach((i) => {
    const [, module, tag] = i.match(/\/data(\/.*)(\/.*)\.yml/)!
    if (!moduleMap.has(module))
      moduleMap.set(module, new QuestionRelation(module, 'category', tag))
    moduleMap.get(module)!.deps.add(tag)
  })

  function addToTagSet(tag: string, dep: string) {
    if (tagMap.has(tag))
      tagMap.get(tag)!.deps.add(dep)
    else
      tagMap.set(tag, new QuestionRelation(tag, 'tag', dep))
  }
  Object.values(modules).forEach((content) => {
    loadQuestions(content).forEach((i) => {
      addToTagSet(`/${i.tag}`, i.link)
      i.tags?.forEach(t => addToTagSet(`/${t}`, i.link))
      questionSet.add(new QuestionRelation(i.link, 'question'))
    })
  })

  return [
    ...Array.from(moduleMap.values()),
    ...Array.from(tagMap.values()),
    ...Array.from(questionSet),
  ]
}

function loadModules() {
  return import.meta.glob(
    [
      '../../data/**/*.yml',
      '!../../data/interview/*.yml',
    ],
    { as: 'raw', eager: true },
  )
}

function loadModule(content: string): RawModuleMeta {
  return YAML.load(content) as RawModuleMeta
}

function loadQuestions(content: string): Question[] {
  return loadModule(content)?.questions || []
}

interface NormalizeModuleOptions {
  module: string
  key: string
}

function normalizeModule(module: RawModuleMeta, options: NormalizeModuleOptions): ModuleMeta {
  const { key } = options
  const questions = module?.questions || []
  const total = questions.length
  const done = questions.filter(i => i.done).length
  const difficultyMap = new Map<Difficulty, number>([
    ['Easy', 0],
    ['Medium', 0],
    ['Hard', 0],
  ])
  questions.reduce((map, i) => map.set(i.difficulty, map.get(i.difficulty)! + 1), difficultyMap)

  return {
    key,
    name: normalizeName(key),
    description: module?.description || '',
    link: `${options.module}/${key}`,
    questions,
    total,
    done,
    undone: total - done,
    ...Object.fromEntries(difficultyMap),
  } as ModuleMeta
}

export function getDifficultyColor(difficulty: string) {
  let color = ''
  switch (difficulty) {
    case 'Easy':
      color = '#a1b53f'
      break
    case 'Medium':
      color = '#e0a569'
      break
    case 'Hard':
      color = '#cb7676'
      break
    default:
  }
  return `color: ${color};`
}
