import { Dispatch } from 'react'

export const RED = 'RED'
export const BLUE = 'BLUE'
export const BLACK = 'BLACK'
export const GREEN = 'GREEN'
export const PURPLE = 'PURPLE'

export type ThemeType =
  | typeof RED
  | typeof BLUE
  | typeof BLACK
  | typeof GREEN
  | typeof PURPLE

export type themeStateType = {
  ui: string
  bg: string
  ft: string
}

export type ThemeContextType = {
  state: themeStateType
  dispatch: Dispatch<ThemeActionTypes>
}

export type redThemeActionType = {
  type: typeof RED
}
export type blueThemeActionType = {
  type: typeof BLUE
}

export type blackThemeActionType = {
  type: typeof BLACK
}

export type greenThemeActionType = {
  type: typeof GREEN
}
export type purpleThemeActionType = {
  type: typeof PURPLE
}

export type ThemeActionTypes =
  | redThemeActionType
  | blueThemeActionType
  | blackThemeActionType
  | greenThemeActionType
  | purpleThemeActionType
