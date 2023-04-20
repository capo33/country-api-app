import styled from 'styled-components'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Container } from '../../global.ts'

export const NavBar = styled.div`
  height: 8vh;
  padding: 15px 0;
  border-bottom: 1px solid gray;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: lightgrey;
`
export const NavBarContainer = styled(Container)`
  /* display: flex;
    justify-content: space-between; */
`
export const H2 = styled.h2`
  font-size: 1.5rem;
`
export const NavBarButton = styled(IconButton)`
  position: absolute;
  right: 30px;
  top: 25px;
  z-index: 10;
`

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavMenuIcon = styled(ColorLensIcon)`
  cursor: pointer;
  &.MuiSvgIcon-root {
    font-size: 2rem;
  }
`

export const ShoppingIcon = styled(ShoppingCartIcon)`
  &.MuiSvgIcon-root {
    font-size: 2rem;
  }
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 1.2rem;
`
export const NavSearch = styled.div`
  /* display: flex; */
`
export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const BadgeWarper = styled.div`
  color: #000;
`
