import { load } from 'js-yaml'
import type { Category, Question, SubNav, Tag } from '~/types'

const genRE = (module: Category) => new RegExp(`..\/..\/data\/${module}\/(.*?).yml`, 'i')

export function getNavs(module: Category): SubNav[] {
  const re = genRE(module)

  return Object.keys(getModules())
    .filter(key => key.includes(module))
    .map((key) => {
      const nav = key.match(re)![1]
      return {
        name: nav,
        link: `/${nav}`,
      }
    })
}

export function getModuleQuestions(module: Category): Record<string, Question[]> {
  const re = genRE(module)

  return Object.entries(getModules())
    .filter(([key, _]) => key.includes(module))
    .reduce((map, [key, val]) => {
      const tag = key.match(re)![1]
      map[tag] = getQuestions(val)
      return map
    }, {} as Record<string, Question[]>)
}

export function getTagQuestions(module: Category, tag: Tag): Question[] {
  const modules = getModules()
  const moduleKey = `../../data/${module}/${tag}.yml`
  return getQuestions(modules[moduleKey])
}

function getQuestions(content: string): Question[] {
  return (load(content) as { questions: Question[] }).questions
}

function getModules() {
  return import.meta.glob('../../data/**/*.yml', { as: 'raw', eager: true })
}
