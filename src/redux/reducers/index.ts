import { countryReducer } from './countryReducer'
import { combineReducers } from 'redux'
import { cartReducer } from './CartReducer'

// table here came from the types folder
const rootReducer = combineReducers({
  table: countryReducer,
  cart: cartReducer,
})

export default rootReducer
