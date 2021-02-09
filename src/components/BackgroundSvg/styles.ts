import styled from 'styled-components'

export const BackgroundSVG = styled.svg`
  background: transparent;

  position: fixed;
  top: 0;
  margin-left: -30px;

  @media (min-width: 1930px){
    margin-left: 0px;
    left: 0;
    width: 100vw;
    transform: scale(1.2)
  }
`

