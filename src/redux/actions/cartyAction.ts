import {
  ADD_TO_CART,
  Country,
  REMOVE_FROM_CART,
  CartActionType,
} from '../../types'

export const addToCart = (country: Country): CartActionType => {
  return {
    type: ADD_TO_CART,
    payload: country,
  }
}

export const removeFromCart = (country: Country): CartActionType => {
  return {
    type: REMOVE_FROM_CART,
    payload: country,
  }
}
