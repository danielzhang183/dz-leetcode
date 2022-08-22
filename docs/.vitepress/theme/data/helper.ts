import type { DefaultTheme } from 'vitepress'
import NavData from '../../../../data/vitepress/nav.json'
import SidebarData from '../../../../data/vitepress/sidebar.json'
import TopicData from '../../../../data/vitepress/topic.json'
import TopicList from '../../../../data/topic.json'

export function getNav(): DefaultTheme.NavItem[] {
  return NavData
}

export function getSidebar(): DefaultTheme.Sidebar {
  return SidebarData
}

export function getDataByTopicName(topicName: string) {
  return (TopicData as Record<string, any[]>)[topicName]
}

export function getTopicData() {
  return TopicList.map(t => ({
    name: t.display_name,
    path: `/Topic${t.home_page}`,
    color: {
      bg: t.color.bg,
      text: t.color.text,
    },
  }))
}
