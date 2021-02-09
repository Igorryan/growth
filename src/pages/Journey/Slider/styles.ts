import styled, { css } from 'styled-components'

import ArrowMinIcon from '../../../assets/icons/arrow-min.svg'

interface SliderProps {
  active?: boolean;
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
  }

  @media (max-width: 800px){
    &::after {
      top: 38px;
      left: 166px;
    }
  }

`

export const Subtitle = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`

export const Description = styled.p`
  margin-top: 12px;

  color: #B1B1B1;
  width: 334px;
  font-size: 14px;
  line-height: 24px;

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