// Variable: countryTypes
export const FETCH_COUNTRIES_START = 'FETCH_COUNTRIES_START'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

// Countries
export type CountryType = {
  id: string | number
  name: {
    common: string
  }
  flags: {
    svg: string
  }
  languages: {
    languages: [{ name: string }]
  }
  population: number
  region: string
  Favourites: boolean
  capital: string
  nativeName: string
}

// REDUCER TYPES
export type CountryReducerState = {
  countries: CountryType[]
  loading: boolean
  error: string
}

// Country Types
// export type Country = {
//   name: {
//     common: string
//   }
//   region: string
//   subregion: string
//   population: number
//   capitnal: string
//   languages: [{ name: string }]
//   nativeName: string
// }
// ACTION TYPES
// -- When we fetch countries, we want to start the loading state
export type FetchCountriesStartAction = {
  type: typeof FETCH_COUNTRIES_START
  paload?: string
}
// --When the action is successful, the payload is the array of countries
export type FetchCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: []
}
// --When the action is not successful, the payload is the error message
export type FetchCountriesFailureAction = {
  type: typeof FETCH_COUNTRIES_FAILURE
  payload: string
}

// --Combine all action types
export type CountryActionType =
  | FetchCountriesStartAction
  | FetchCountriesSuccessAction
  | FetchCountriesFailureAction

// Table orderBy
export type OrderType = 'asc' | 'desc'

export type CountryTableProps = {
  flag: string
  imageUrl: string
  name: string
  region: string
}
