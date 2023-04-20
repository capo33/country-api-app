import styled, { css, keyframes } from 'styled-components'

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
  font-size: 2rem;
  background-color: #fff;
  z-index: 100;
`
export const lds_dual_ring = css`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: blue transparent blue transparent;
    animation: ${keyframes`

        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `} 1.2s linear infinite;
  }
`
export const Spiners = styled.div`
  ${lds_dual_ring}
`
