import { Dispatch } from 'redux'
import axios from 'axios'

import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FetchCountriesFailureAction,
  FetchCountriesStartAction,
  FetchCountriesSuccessAction,
} from '../../types'

const fetchCountriesStart = (): FetchCountriesStartAction => {
  return {
    type: FETCH_COUNTRIES_START,
  }
}

const fetchCountriesSuccess = (countries: []): FetchCountriesSuccessAction => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

const fetchCountriesFailure = (error: string): FetchCountriesFailureAction => {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  }
}

const fetchCountries = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCountriesStart())
    try {
      const URL = 'https://restcountries.com/v3.1/all'
      const response = await axios.get(URL)
      console.log(response)
      dispatch(fetchCountriesSuccess(response.data))
    } catch (error) {
      dispatch(fetchCountriesFailure('error ' + error))
    }
  }
}

// const fetchCountries = () => {
//   return (dispatch: Dispatch) => {
//     dispatch(fetchCountriesStart())
//     axios
//       .get('https://restcountries.com/v3.1/all')
//       .then((response) => {
//         console.log(response.data)
//         const countries = response.data
//         dispatch(fetchCountriesSuccess(countries))
//       })
//       .catch((error) => {
//         dispatch(fetchCountriesFailure(error.message))
//       })
//   }
// }
export {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  fetchCountries,
}
