import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActionType,
  CartReducerState,
} from '../../types'

const initialState: CartReducerState = {
  cart: [],
}

export const cartReducer = (
  state: CartReducerState = initialState,
  action: CartActionType
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const country = action.payload
      return {
        ...state,
        cart: [...state.cart, country],
      }
    case REMOVE_FROM_CART:
      const filterdCountry = state.cart.filter(
        (country) => country !== action.payload
      )
      return {
        ...state,
        cart: [...filterdCountry],
      }
    default:
      return state
  }
}
