import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListItemText, TableCell } from '@material-ui/core'

import DataAvatar from '../../Avatar/DataAvatar'
import { context } from '../../../contexts/context'
import { TableCellProps } from '../../../types/tableType'

const TableCells = ({ country, handleClick, cartItems }: TableCellProps) => {
  const { state } = useContext(context)
  return (
    <>
      <TableCell>
        <DataAvatar src={country.flags.svg} alt={country.name.common} />
      </TableCell>
      <TableCell>
        <Link to={`/country/${country.name.common}`}>
          {country.name.common}
        </Link>
      </TableCell>
      <TableCell>
        {country.languages &&
          Object.entries(country.languages).map((value) => (
            <ListItemText key={value[0]} primary={value[1]} />
          ))}
      </TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>
        {cartItems.find(
          (item: { name: any }) => item.name.common === country.name.common
        ) ? (
          <Button variant="contained" disabled>
            Add
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ background: state.ui, color: state.ft }}
            onClick={() => handleClick(country)}
          >
            Add
          </Button>
        )}
      </TableCell>
    </>
  )
}

export default TableCells
