import styled, { css } from 'styled-components'
import { Entrances, Exits } from '../../styles/animations'

interface AnimationProps {
  animation: string
}

export const Wrapper = styled.div<AnimationProps>`
  width: 100vw;
  height: 100vh;
  
  position: fixed;

  background-position-y: -500px;
  background-position-x: -720px;

  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  overflow: hidden;

  transition: background-color 0.4s;

  ${props => props.animation === 'in' && css`
    ${Entrances.fade_in_bck}
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.fade_out_bck}
  `}
`

