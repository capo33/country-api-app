import { Country } from './CartTypes'
import { CountryType } from './countryTypes'

export type CountryTableProps = {
  search: string
  click?: any
}
export type Column = {
  id: keyof CountryType
  label: string
  minWidth?: number
  align?: 'left' | 'right' | 'center'
  format?: (value: number) => string
}

// Table Props
export type TablePaginationsProps = {
  countries: CountryType[]
  rowsPerPage: number
  page: number

  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void

  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type SortBy = 'name' | 'population' | 'region'

export type TableSortProps = {
  sortBy: string | number
  handleSort: (event: React.ChangeEvent<{ value: unknown }>) => void
}

export type TableCellProps = {
  country: CountryType
  handleClick: (country: CountryType) => void
  cartItems: Country[]
}
