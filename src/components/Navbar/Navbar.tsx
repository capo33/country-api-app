import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'

import Search from '../Search/Search'
import { StyledBadge } from '../../Helper/helper'
import { NavbarProps, AppState } from '../../types'
import { CartMenu } from '../Cart/CartMenu'
import { context } from '../../contexts/context'
import {
  NavBar,
  NavContent,
  NavBarContainer,
  NavIcon,
  BadgeWarper,
  NavLogo,
  NavSearch,
  Wrapper,
  NavMenuIcon,
  ShoppingIcon,
} from './navbarStyle'

const Navbar = ({
  onClick,
  isOpen,
  handleSearch,
  handleClickSearch,
  click,
  search,
}: NavbarProps) => {
  const cart = useSelector((state: AppState) => state.cart.cart)
  const { state } = useContext(context)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <NavBar style={{ background: state.ui, color: state.ft }}>
      <NavBarContainer>
        <NavContent>
          <Wrapper>
            <NavMenuIcon onClick={() => onClick(!isOpen)} />
            <NavLogo>Country API</NavLogo>
          </Wrapper>
          <NavSearch>
            <Search
              handleSearch={handleSearch}
              click={click}
              handleClickSearch={handleClickSearch}
              search={search}
            />
          </NavSearch>
          <NavIcon>
            <Wrapper>
              <IconButton aria-label="cart">
                <BadgeWarper>
                  <StyledBadge
                    badgeContent={cart && cart.length === 0 ? '0' : cart.length}
                    color={cart && cart.length === 0 ? 'primary' : 'error'}
                    variant="standard"
                    overlap="rectangular"
                    onClick={handleClick}
                  >
                    <ShoppingIcon />
                  </StyledBadge>
                  <CartMenu
                    onClick={handleClose}
                    menuOpen={menuOpen}
                    cart={cart}
                    anchorEl={anchorEl}
                  />
                </BadgeWarper>
              </IconButton>
            </Wrapper>
          </NavIcon>
        </NavContent>
      </NavBarContainer>
    </NavBar>
  )
}

export default Navbar
