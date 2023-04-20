import { CountryReducerState } from './countryTypes'
import { CartReducerState } from './CartTypes'
export * from './countryTypes'
export * from './sidebarType'
export * from './styleComponentsTypes'
export * from './navbarTypes'
export * from './CartTypes'

// Global App State Type that includes all reducers types - contians the state of all reducers and has to match the rootReducer
export type AppState = {
  table: CountryReducerState
  cart: CartReducerState
}
