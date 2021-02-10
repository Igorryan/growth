import styled, { css } from 'styled-components'
import { Entrances, Exits } from '../../../styles/animations'

interface SliderProps {
  active?: boolean;
}

interface OptionsProps {
  isLink?: boolean
  animation: string
}

interface AnimationProps {
  animation: string
}

export const Wrapper = styled.main`
  display: flex;
  align-items: center;

  min-height: 100vh;

  position: relative;

  @media (max-width: 1000px){
    align-items: flex-start;
    justify-content: center;
  }
`

export const ContentWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;

  width: max-content;
  min-height: 584px;
  padding-left: 150px;

  @media (max-width: 1200px){
    padding-left: 35px;
  }

  @media (max-width: 1000px){
    padding-top: 60px;
    padding-left: 0px;
  }

  @media (max-width: 580px){
    min-height: 0;
    width: 86%;
  }
`

export const Title = styled.h1`
  color: #70EAA6;
  
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;

  margin-bottom: 70px;

  @media (max-width: 500px){
    margin-top: 20px;
    margin-bottom: 50px;
  }
`

export const Logo = styled.img<AnimationProps>`
  width: max-content;
  height: 80px;
  
  object-fit: contain;
  object-position: 0 0;
  
  margin-bottom: 25px;

  ${props => props.animation === 'in' && css`
    ${Entrances.flip_in_hor_bottom}
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.flip_out_hor_bottom}
  `}
  
`

export const Description = styled.p<AnimationProps>`
  width: 482px;
  font-size: 14px;

  margin-bottom: 34px;

  ${props => props.animation === 'in' && css`
    ${Entrances.flip_in_hor_bottom}
  `}

  ${props => props.animation === 'out' && css`
    ${Exits.flip_out_hor_bottom}
  `}

  @media (max-width: 580px){
    width: 86%;
  }
`

export const OptionsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 288px 288px;
  gap: 15px;

  @media (max-width: 680px){
    grid-template-columns: 1fr;
  }
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

  ${props => props.animation === 'in' && css`
    ${Entrances.scale_in_center}
  `}
`

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 30px 0;

  svg {
    cursor: pointer;

    path {
      transition: all 0.2s; 
    }
  }

  @media (max-width: 500px) {
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