import styled, { css } from 'styled-components'
import {Entrances, Exits} from '../../../styles/animations'

interface SliderProps {
  active?: boolean;
}

interface AnimationProps {
  animation: string
}

export const Wrapper = styled.main<AnimationProps>`
  position: relative;
  
  display: flex;
  flex-direction: column;

  width: 456px;
  max-width: 456px;
  height: 707px;

  background: #1E1E1E;

  border-radius: 6px 50px 0 0;
  padding: 75px;
  padding-top: 160px;

  overflow: visible;

  > svg {
    position: absolute;
  }

  ${props => props.animation === 'in' && css`
    ${Entrances.slide_in_bottom}
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.slide_out_bottom}
  `}

  > svg:nth-of-type(1) {
    top: 20px;
    left: 20px;
  }

  > svg:nth-of-type(2) {
    bottom: 110px;
    right: 30px;
  }

  @media (max-width: 600px){
    width: 92%;
  }

  @media (max-width: 450px){
    height: 70vh;
    padding: 50px;
    padding-top: 70px;

    > svg:nth-of-type(1) {
      width: 40px;

      top: -70px;
      left: 20px;
    }

    > svg:nth-of-type(2) {
      bottom: 10px;
      right: 20px;
    }
  }
`

export const TitleImage = styled.img`
  position: absolute;
  right: -200px;
  bottom: 30px;

  transition: opacity 0.4s;

  @media (max-width: 760px){
    opacity: 0;
  }
`

export const Sobtitle = styled.strong<AnimationProps>`
  margin-bottom: 10px;

  overflow: visible;
  text-transform: uppercase;

  opacity: 0;

  ${props => props.animation === 'in' && css`
    ${Entrances.fade_in_bottom}
  `}

  @media (max-width: 450px){
    font-size: 14px;
  }
`

export const Title = styled.h1<AnimationProps>`
  position: relative;

  color: #70EAA6;

  text-transform: uppercase;
  font-size: 43px;

  margin-bottom: 14px;

  overflow: visible;

  opacity: 0;

  ${props => props.animation === 'in' && css`
    ${Entrances.fade_in_bottom}
    animation-delay: 0.2s;
  `}

  @media (max-width: 450px){
    font-size: 32px;
  }
`

export const Description = styled.p<AnimationProps>`
  margin-top: 12px;
  text-align:justify;

  color: #B1B1B1;
  font-size: 14px;
  line-height: 24px;

  opacity: 0;

  ${props => props.animation === 'in' && css`
    ${Entrances.fade_in_bottom}
    animation-delay: 0.4s;
  `}

  @media (max-width: 450px){
    margin-top: 6px;
    font-size: 12px;
    line-height: 16px;
  }
`

export const Button = styled.button<AnimationProps>`
  background: #70EAA6;
  padding: 16px 40px;
  border: none;
  border-radius: 100px;
  margin-top: 40px;

  opacity: 0;

  ${props => props.animation === 'in' && css`
    ${Entrances.fade_in_bottom}
    animation-delay: .6s;
  `}

  @media (max-width: 450px){
    padding: 12px 20px;
  }
`

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  
  position: absolute;
  bottom: 24px;
  right: 24px;

  svg {
    cursor: pointer;

    path {
      transition: all 0.2s; 
    }
  }

  @media (max-width: 450px){
    justify-content: center;
    width: 100%;
    right: 0;
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