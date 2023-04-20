import { styled, Drawer as MuiDrawer } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

import Badge from '@material-ui/core/Badge'
import { Theme, withStyles, createStyles } from '@material-ui/core/styles'

// Drawer Styles
export const Drawer = styled(MuiDrawer)({
  '& .MuiDrawer-paper': {
    paddingTop: '10px',
    left: '0',
    width: 240, //drawer width
    transition: 'all 0.2s ease-in-out ',
    // cursor: 'pointer',
  },
})

// Badge Styles
export const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 0,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  })
)(Badge)

// Avatar Styles
export const AvatarImage = styled(Avatar)({
  margin: '0 auto',
  borderRadius: '5px',
  textAlign: 'center',
  maxWidth: '350px',
})

// Cart Styles
export const CartMenuItems = styled(Menu)({
  '& .MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded':
    {
      padding: '60px',
      width: 400,
      position: 'absolute',
      top: '60px !important',
      scrollBehavior: 'smooth',
      borderRadius: '5px',
      transition: 'all 0.2s ease-in-out ',
    },
})

// Table Styles
export const TableCountry = styled(Table)({
  width: '100%',
  height: '100%',
  margin: '0 auto',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px #ccc',
  backgroundColor: '#fff',
  padding: '0px',
  borderCollapse: 'collapse',
  textAlign: 'center',
  '& th': {
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',

    '&tr': {
      textAlign: 'center',
    },
  },
})
export const TableBodyCountry = styled(TableBody)({
  width: '100%',
  height: '100%',
  margin: '0 auto',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px #ccc',
  backgroundColor: '#fff',
  padding: '0px',
  borderCollapse: 'collapse',
  textAlign: 'center',
  '& tr': {
    textAlign: 'center',
  },
  '& td': {
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '14px',
    textAlign: 'center',
    backgroundColor: `#fff`,
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
})
