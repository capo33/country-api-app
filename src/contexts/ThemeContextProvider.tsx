import React, { ReactNode, useEffect, useReducer } from 'react'
import ThemeReducer from '../ContextReducers/ThemeReducer/ThemeReducer'
import { defaultState, context } from './context'

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ThemeReducer, defaultState, () => {
    const localData = localStorage.getItem('theme')
    return localData ? JSON.parse(localData) : defaultState
  })

  useEffect(() => localStorage.setItem('theme', JSON.stringify(state)), [state])

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  )
}

export default ThemeContextProvider
