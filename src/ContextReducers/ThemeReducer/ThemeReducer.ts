import { ThemeActionTypes, themeStateType } from '../../types/themeTypes'

const ThemeReducer = (state: themeStateType, action: ThemeActionTypes) => {
  switch (action.type) {
    case 'BLACK':
      return {
        ui: '#000',
        bg: '#fff',
        ft: '#fff',
      }
    case 'BLUE':
      return {
        ui: 'blue',
        bg: '#fff',
        ft: '#fff',
      }
    case 'GREEN':
      return {
        ui: 'green',
        bg: '#fff',
        ft: '#fff',
      }
    case 'PURPLE':
      return {
        ui: 'purple',
        bg: '#fff',
        ft: '#fff',
      }
    case 'RED':
      return {
        ui: 'red',
        bg: '#fff',
        ft: '#fff',
      }
    default:
      return state
  }
}

export default ThemeReducer
