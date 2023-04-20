import { Menu } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

import styled, { css } from 'styled-components'

export const MenuDiv = styled.div``

export const MuiSvgIcon = css``

export const MenuCart = styled(Menu)`
  &.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded {
    /* position: absolute ;
  top: 60px;
  width:450px; ; */
  }
  /* ${MuiSvgIcon} */
`

export const MenuCartItems = styled.div`
  margin: 2rem 0;
`
export const MenuCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`
export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`
export const Image = styled.img`
  flex: 1;
  width: 100px;
  margin-right: 1rem;
`
export const H2 = styled.h2`
  flex: 3;
  font-size: 1.2rem;
  margin-left: 1rem;
`
export const DeleteIcon = styled(DeleteForeverIcon)`
  flex: 1;
  cursor: pointer;
  font-size: 2rem;
  color: tomato;
  &.MuiSvgIcon-root {
    font-size: 2rem;
  }
`
