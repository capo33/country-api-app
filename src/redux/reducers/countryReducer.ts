import {
  FETCH_COUNTRIES_FAILURE,
  CountryReducerState,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  CountryActionType,
} from '../../types'

// initial state of the reducer
const initialState: CountryReducerState = {
  countries: [],
  loading: false,
  error: '',
}

export const countryReducer = (
  state = initialState,
  action: CountryActionType
) => {
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: '',
      }
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
