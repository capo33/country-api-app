import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableRow from '@material-ui/core/TableRow'
import { Container } from '@material-ui/core'
import _ from 'lodash'

import { SortPaginationHeader } from './tableStyle'
import { fetchCountries, addToCart } from '../../../redux/actions'
import { CountryTableProps } from '../../../types/tableType'
import { AppState } from '../../../types'
import TableHeader from '..//TableHeader/TableHeader'
import { TableCountry, TableBodyCountry } from '../../../Helper/helper'
import Spiner from '../Spiner/Spiner'
import TablePaginations from '../TablePagination/TablePaginations'
import TableSort from '../TableSort/TableSort'
import TableCells from '../TableCells/TableCells'
import { SortBy } from '../../../types/tableType'

const CountryTable = ({ click }: CountryTableProps) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const countries = useSelector((state: AppState) => state.table.countries)
  const cartItems = useSelector((state: AppState) => state.cart.cart)
  const loading = useSelector((state: AppState) => state.table.loading)

  const [sortBy, setSortBy] = useState<SortBy>('region')

  const [filterdCountries, setFilterdCountries] = useState(countries)
  const dispatch = useDispatch()
  useEffect(() => {
    setFilterdCountries(countries)
  }, [countries])

  useEffect(() => {
    if (click !== '') {
      const filteredCounry = countries.filter((country) =>
        country.name.common.toLowerCase().includes(click.toLowerCase())
      )
      setFilterdCountries(filteredCounry)
    } else {
      setFilterdCountries(countries)
    }
  }, [click, countries])

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    let sortedCountries = _.orderBy(countries, [sortBy], ['asc']) as []
    setFilterdCountries(sortedCountries)
  }, [sortBy, countries])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  if (loading) {
    return <Spiner />
  }

  const handleClick = (country: any) => {
    dispatch(addToCart(country))
  }

  const handleSort = (event: any) => {
    setSortBy(event.target.value)
  }

  return (
    <>
      <Container style={{ marginBottom: '3rem' }}>
        <SortPaginationHeader>
          <TableSort sortBy={sortBy} handleSort={handleSort} />

          <TablePaginations
            countries={filterdCountries}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </SortPaginationHeader>
        <TableCountry>
          <TableHeader />
          <TableBodyCountry>
            {!loading &&
              filterdCountries
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country) => {
                  return (
                    <TableRow key={country.flags.svg}>
                      <TableCells
                        country={country}
                        handleClick={handleClick}
                        cartItems={cartItems}
                      />
                    </TableRow>
                  )
                })}
          </TableBodyCountry>
        </TableCountry>
      </Container>
    </>
  )
}

export default CountryTable
