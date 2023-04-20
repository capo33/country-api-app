import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import { BoxType } from '../../types'

export const CloseDrawer = styled(CloseIcon)`
  cursor: pointer;
  z-index: 10;

  &.MuiSvgIcon-root {
    font-size: 2rem;
    padding-left: 140px;
  }
`

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  padding-left: 1.3rem;
`

export const DrawerThemes = styled.div`
  font-size: 1rem;
  margin-top: 2.5rem;
  padding-left: 1.3rem;
`

export const H2 = styled.h2`
  font-size: 1.2rem;
`

export const NavMenu = styled.ul`
  list-style: none;
  margin-top: 4rem;
`

export const NavItems = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`
export const Box = styled.div<BoxType>`
  width: 40px;
  height: 40px;
  margin-left: 1rem;

  background: ${(props) =>
    (props.backgroundColor === 'blue' && 'blue') ||
    (props.backgroundColor === 'red' && 'red') ||
    (props.backgroundColor === 'green' && 'green') ||
    (props.backgroundColor === 'black' && 'black') ||
    (props.backgroundColor === 'purple' && 'purple')};
  border-radius: 10%;
`
