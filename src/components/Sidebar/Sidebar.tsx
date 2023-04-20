import React, { useContext } from 'react'

import { SidebarProps } from '../../types/sidebarType'
import { Drawer } from '../../Helper/helper'
import {
  CloseDrawer,
  DrawerContent,
  DrawerThemes,
  H2,
  NavItems,
  NavMenu,
  Box,
} from './sidebarStayle'
import { context } from '../../contexts/context'
import { ThemeArray } from './sidbarData'

const Sidebar = ({ onClick, isOpen }: SidebarProps) => {
  const { dispatch } = useContext(context)
  const handleOpen = () => {
    onClick(!isOpen)
  }

  return (
    <>
      <Drawer open={isOpen} onClose={handleOpen}>
        <DrawerContent>
          <CloseDrawer onClick={handleOpen} />
          <DrawerThemes>
            <H2>Theme</H2>
            <NavMenu>
              {ThemeArray.map((theme) => (
                <NavItems key={theme.id} onClick={handleOpen}>
                  <H2>{theme.name}</H2>
                  <Box
                    backgroundColor={theme.theme}
                    onClick={() => dispatch({ type: theme.bg })}
                  ></Box>
                </NavItems>
              ))}
            </NavMenu>
          </DrawerThemes>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar
