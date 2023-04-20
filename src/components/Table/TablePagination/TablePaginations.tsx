import { TablePagination } from '@material-ui/core'
import React from 'react'
import { TablePaginationsProps } from '../../../types/tableType'

const TablePaginations = ({
  countries,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}: TablePaginationsProps) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={countries.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default TablePaginations
