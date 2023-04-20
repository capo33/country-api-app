import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { columns } from './data'

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
