import styled, { css } from 'styled-components'

interface SliderProps {
  active?: boolean;
}

interface OptionsProps {
  isLink?: boolean
}

export const Wrapper = styled.main`
  display: flex;
  align-items: center;

  min-height: 100vh;

  position: relative;
`

export const ContentWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  width: max-content;
  min-height: 584px;
  padding-bottom:60px;

  padding-left: 150px;
`

export const Title = styled.h1`
  color: #70EAA6;
  
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;

  margin-bottom: 70px;
`

export const Logo = styled.img`
  width: 234px;
  margin-bottom: 25px;
`

export const Description = styled.p`
  width: 482px;
  font-size: 14px;

  margin-bottom: 34px;
`

export const OptionsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 288px 288px;
  gap: 15px;
`

export const Option = styled.li<OptionsProps>`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  background: #323232;
  padding: 23px 28px 26px 50px;
  border-radius: 6px;

  &::after {
    content: '';
    position: absolute;

    width: 10px;
    height: 10px;
    
    background: #70EAA6;
    left: 28px;
  }

  ${props => props.isLink && css`
    border: 1px solid #4BB57A;

    a {
      color: #fff;
      cursor: pointer;
    }
  `}
`

export const NavigationBar = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;

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