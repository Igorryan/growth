import styled, { css } from 'styled-components'
import {Text, Entrances, Exits} from '../../../styles/animations'

import ArrowMinIcon from '../../../assets/icons/arrow-min.svg'

interface SliderProps {
  active?: boolean;
}

interface AnimationProps {
  animation: string
}

export const Wrapper = styled.main`
  position: relative;
  width: 384px;
  height: 317px;

  overflow: visible;

  @media (max-width: 800px){
    width: 300px;
  }
`

export const Title = styled.h1`
  position: relative;

  text-transform: uppercase;
  font-size: 43px;

  margin-bottom: 34px;

  ${Text.focus_in_contract};
  animation-delay: 0.2s;

  overflow: visible;

  &::after {
    content: '';
    position: absolute;

    top: -8px;
    left: 120px;

    width: 24px;
    height: 24px;

    background: url(${ArrowMinIcon}) no-repeat center;
    background-size: cover;

    ${Text.swirl_in_top_fwd};
      animation-duration: 1.4s;
      animation-delay: 1.2s;
    }

  @media (max-width: 800px){
    &::after {
      top: 38px;
      left: 166px;
    }
  }

`

export const Subtitle = styled.strong<AnimationProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  ${props => props.animation === 'in' && css`
    ${Entrances.fade_in_bck};
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.fade_out_bck};
  `}
`

export const Description = styled.p<AnimationProps>`
  margin-top: 12px;

  color: #B1B1B1;
  width: 334px;
  font-size: 14px;
  line-height: 24px;

  ${props => props.animation === 'in' && css`
    ${Entrances.swing_in_top_fwd};
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.swing_out_top_bck};
  `}

  @media (max-width: 800px){
    width: 100%;
  }
`

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  
  position: absolute;
  bottom: 0;

  width: 100%;

  svg {
    cursor: pointer;

    path {
      transition: all 0.2s; 
    }
  }

  @media (max-width: 800px){
    justify-content: center;
  }
  
`

export const PrevButton = styled.svg<SliderProps>`
  margin-right: 10px;

  path {
    ${props => props.active && css`
    fill: #70EAA6;
  `}
  }
`

export const NextButton = styled.svg<SliderProps>`
  margin-left: 10px;

  path {
    ${props => props.active && css`
    fill: #70EAA6;
  `}
  }
`

export const Circle = styled.div<SliderProps>`
  width: 10px;
  height: 10px;
  background: #959595;
  border-radius: 50%;
  margin: 0 5px;
  transition: all 0.4s; 

  ${props => props.active && css`
    background: #70EAA6;
  `}
`