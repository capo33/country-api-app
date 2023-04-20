import styled from 'styled-components'

export const CardContainer = styled.div`
  margin: 25px auto 0;
  width: 800px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
export const Image = styled.img`
  width: 100%;
  max-width: 450px;
  /* width: 50%;
  height: auto; */
`
export const Card = styled.div`
  background-color: #fff;
  display: flex;
  padding: 30px;
  justify-content: space-between;
`
export const CardBody = styled.div`
  display: inline-block;
  width: 310px;
`
export const CardTitle = styled.div`
  font-family: 'Cormorant Garamond', serif;
  font-size: 60px;
  font-weight: 300;
  line-height: 60px;
  margin: 10px 0;
`

export const CardDescription = styled.h2`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
`

export const P = styled.p`
  font-size: 1.1rem;
  line-height: 24px;
  margin: 0;
`
export const Span = styled.span`
  font-size: 1rem;
  color: #999;
  font-weight: 300;
  line-height: 22px;
`
