import { ThemeType } from './themeTypes'

export type ThemeArrayType = {
  id: number
  bg: ThemeType
  name: string
  theme: string
}

export type SidebarProps = {
  onClick: Function
  isOpen: boolean
}
