export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export type Country = {
  name: string
  flag: string
  population: number
  region: string
  Languages: []
}

// export type CountryCart = {
//   name: {
//     common:string
//   }
//   flags:{
//     svg:string
//   }
//   onClick: () => void
// }
export type CartReducerState = {
  cart: Country[]
}

export type AddToCartAction = {
  type: typeof ADD_TO_CART
  payload: Country
}

export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART
  payload: Country
}

export type CartActionType = AddToCartAction | RemoveFromCartAction
