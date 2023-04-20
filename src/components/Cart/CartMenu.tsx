import React, { useContext } from 'react'
import Fade from '@material-ui/core/Fade'
import { Avatar } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartyAction'
import { CartMenuProps } from '../../types/cartType'
import { CartMenuItems } from '../../Helper/helper'
import { context } from '../../contexts/context'
import {
  MenuCartItem,
  MenuCartItems,
  H2,
  DeleteIcon,
  H1,
} from './cartMenuStyle'

import './cart.css'

export const CartMenu = ({
  menuOpen,
  onClick,
  cart,
  anchorEl,
}: CartMenuProps) => {
  const dispatch = useDispatch()
  const { state } = useContext(context)

  const handleClose = () => {
    onClick()
  }

  return (
    <>
      <CartMenuItems
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <H1>Cart item</H1>

        <MenuCartItems>
          {cart.length === 0 && <H2>No country added yet </H2>}
          {cart.length > 0 && (
            <H2>
              You have added{' '}
              {cart.length > 1
                ? cart.length + ' countries'
                : cart.length + ' country'}
            </H2>
          )}

          {cart.map((country: any) => (
            <MenuCartItem key={country.flags.svg}>
              <Avatar
                variant="rounded"
                src={country.flags.svg}
                alt={country.flags.svg}
              />
              <H2>{country.name.common}</H2>
              <DeleteIcon
                style={{ color: state.ui }}
                onClick={() => dispatch(removeFromCart(country))}
              />
            </MenuCartItem>
          ))}
        </MenuCartItems>
      </CartMenuItems>
    </>
  )
}
