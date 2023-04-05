export enum MODE {
  NAV,
  VIEW,
}

export const mode = useStorage('dz-leetcode-mode', MODE.VIEW)
