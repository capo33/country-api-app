import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import { SortedLest, P } from './tablesortStyle'
import { TableSortProps } from '../../../types/tableType'

const TableSort = ({ sortBy, handleSort }: TableSortProps) => {
  return (
    <SortedLest>
      <P>Sort by:</P>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        disableUnderline={true}
        onChange={handleSort}
      >
        <MenuItem value="region">Region</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="population">Population</MenuItem>
      </Select>
    </SortedLest>
  )
}

export default TableSort
