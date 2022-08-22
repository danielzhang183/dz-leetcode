import { readFileSync, writeFileSync } from 'fs'
import type { DefaultTheme } from 'vitepress'
import { ensureDirSync } from 'fs-extra'
import TopicData from '../data/topic.json'
import { taskLogger, withRoot } from './helper'

// nav data exclude topic
const NavData = [
  {
    text: 'About Me',
    link: '/About/me',
  },
] as DefaultTheme.NavItem[]

export const TOPIC_PATH_PREFIX = '/Topic'
const withVitepress = (url: string) => withRoot(`./data/vitepress${url}`)

// 生成 nav 数据和 sidebar 数据
function generateNav() {
  const nav = [...TopicData.map(t => ({
    text: t.display_name,
    link: `${TOPIC_PATH_PREFIX}${t.home_page}`,
  })), ...NavData]
  ensureDirSync(withVitepress(''))
  writeFileSync(withRoot(withVitepress('/nav.json')), JSON.stringify(nav, null, 2))
}

// sidebar and topic data
export async function generateSidebarAndTopic() {
  const result: DefaultTheme.Sidebar = {}
  const topicData: Record<string, any[]> = {}
  for (let i = 0; i < TopicData.length; i++) {
    const t = TopicData[i]
    const TopicArticleData = JSON.parse(readFileSync(withRoot(`./data/topic/${t.name}.json`), 'utf8'))
    result[`${TOPIC_PATH_PREFIX}/${t.path_name}`] = [{
      text: t.display_name,
      items: TopicArticleData.map((item: any) => ({
        text: item.name,
        link: item.path,
      })),
    }]
    topicData[t.name] = TopicArticleData
  }
  writeFileSync(withVitepress('/sidebar.json'), JSON.stringify(result, null, 2))
  writeFileSync(withVitepress('/topic.json'), JSON.stringify(topicData, null, 2))
}

function main() {
  taskLogger.start('开始生成 vitepress 需要数据')
  generateNav()
  generateSidebarAndTopic()
  taskLogger.end('生成完毕')
}

main()
