export interface AppSettings {
  mode: MODE
  graphView: 'list' | 'graph'
  graphShowStructures: boolean
  graphShowAlgorithms: boolean
  graphShowSeries: boolean
}

export enum MODE {
  NAV,
  VIEW,
}

const appSettings = useLocalStorage<AppSettings>('dz-leetcode-settings', {
  mode: MODE.VIEW,
  graphView: 'graph',
  graphShowStructures: true,
  graphShowAlgorithms: false,
  graphShowSeries: false,
}, { mergeDefaults: true })

export const mode = ref(appSettings.value.mode)

const appSettingsRefs = toRefs(appSettings)

export function useAppSettings() {
  return appSettingsRefs
}
