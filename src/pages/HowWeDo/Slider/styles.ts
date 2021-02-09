import styled, { css } from 'styled-components'

interface SliderProps {
  active?: boolean;
}

export const Wrapper = styled.main`
  position: relative;
  
  display: flex;
  flex-direction: column;

  width: 456px;
  height: 707px;

  background: #1E1E1E;

  border-radius: 6px 50px 0 0;
  padding: 75px;
  padding-top: 160px;

  overflow: visible;

  > svg {
    position: absolute;
  }

  > svg:nth-of-type(1) {
    top: 20px;
    left: 20px;
  }

  > svg:nth-of-type(2) {
    bottom: 110px;
    right: 30px;
  }
`

export const Sobtitle = styled.strong`
  margin-bottom: 10px;

  text-transform: uppercase;
`

export const Title = styled.h1`
  position: relative;

  color: #70EAA6;

  text-transform: uppercase;
  font-size: 43px;

  margin-bottom: 14px;

  overflow: visible;
`

export const Description = styled.p`
  margin-top: 12px;
  text-align:justify;

  color: #B1B1B1;
  font-size: 14px;
  line-height: 24px;
`

export const Button = styled.button`
  background: #70EAA6;
  padding: 16px 40px;
  border: none;
  border-radius: 100px;
  margin-top: 40px;
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