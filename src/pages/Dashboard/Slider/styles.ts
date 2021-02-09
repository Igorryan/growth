import styled, { css } from 'styled-components'

interface SliderProps {
  active?: boolean;
}

export const Wrapper = styled.main`
  position: relative;
  min-width: 370px;
  height: 377px;
`

export const Header = styled.header`
  display: flex;

  font-family: 'Saira Semi Condensed', sans-serif;
  font-size: 25px;
  margin-bottom: 17px;
  color: #70EAA6;
  line-height: 20px;
  overflow: hidden;

  div {
    position: relative;
    width: 140px;
    height: 18px;
    margin-left: 2px;

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
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 43px;

  margin-bottom: 20px;
`

export const Description = styled.p`
  color: #B1B1B1;
  width: 280px;
  font-size: 14px;
  line-height: 24px;
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