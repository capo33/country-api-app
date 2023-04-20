import styled from 'styled-components'
import { Container } from '../../global.ts'
import * as global from '../../variable'

export const Hero = styled.div``
export const Containers = styled(Container)`
  background-color: green;
`

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${global.secondaryColor};
  font-family: 'Montserrat', sans-serif;
`
