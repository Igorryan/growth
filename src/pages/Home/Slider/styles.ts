import styled, { css, keyframes } from 'styled-components'
import { Entrances, Exits } from '../../../styles/animations'

interface SliderProps {
  active?: boolean;
}

interface AnimationProps {
  animation: string
}

const Flashes = keyframes`
  0%, 100% {opacity: 0.8;}
  50% {opacity: 0}
`

export const Wrapper = styled.main`
  position: relative;
  width: 370px;
  max-width: 370px;
  height: 377px;

  @media (max-width: 500px){
    width: 86%;
  }
`

export const Header = styled.header`
  display: flex;

  font-family: 'Saira Semi Condensed', sans-serif;
  font-size: 25px;
  margin-bottom: 17px;
  color: #70EAA6;
  line-height: 20px;
  overflow: hidden;
`

export const BarProgress = styled.div<AnimationProps>`
  position: relative;
  width: 0px;
  height: 18px;
  margin-left: 2px;

  transition: width 0.6s;

  ${props => props.animation === 'in' && css`
    width: 140px;
  `}

  &::after {
    content: '';
    
    position: absolute;
    left: 0;
    bottom: 0;

    background: #70EAA6;

    height: 2px;
    width: 100%;

    transition: width 0.4s ease-in-out;
  }
`

export const Title = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-size: 43px;

  width: 80%;
  min-height: 45px;
  overflow: visible;

  margin-bottom: 20px;

  &::after {
    content: '';
    position: absolute;

    width: 2px;
    height: 38px;
    
    background: #fff;

    bottom: 3px;
    margin-left: 5px;

    animation: ${Flashes} .7s infinite;
  }

  @media (max-width: 500px){
    font-size: 38px;
    min-height: 38px;

  &::after {
    height: 34px;
  }
  }
`

export const Description = styled.p<AnimationProps>`
  color: #B1B1B1;
  width: 280px;
  font-size: 14px;
  line-height: 24px;

  opacity: 0;

  @media (max-width: 800px){
    width: 100%;
  }

  ${props => props.animation === 'in' && css`
    ${Entrances.swing_in_top_fwd};
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.swing_out_top_bck};
  `}
`

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  bottom: 0;

  width: 100%;

  svg {
    cursor: pointer;

    path {
      transition: all 0.2s; 
    }
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