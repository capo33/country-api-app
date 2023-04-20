import { createContext } from 'react'
import {
  ThemeActionTypes,
  ThemeContextType,
  themeStateType,
} from '../types/themeTypes'

export const defaultState: themeStateType = {
  bg: '#fff',
  ft: '#000',
  ui: 'green',
}
//initializing the context tells the provider,hey expect a value that looks like the themContext type
export const context = createContext<ThemeContextType>({
  state: defaultState,
  dispatch: (actions: ThemeActionTypes) => {},
})
