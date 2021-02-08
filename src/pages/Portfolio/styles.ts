import styled, {css} from 'styled-components'

import LayoutBase from '../../components/LayoutBase';
import Background from '../../assets/img/background-portfolio.png';

interface OptionsProps {
  isLink?: boolean
}

export const Wrapper = styled(LayoutBase)`
  background-image: url(${Background});
  background-position-y: -500px;
  background-position-x: -720px;

  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-left: 150px;
  min-height: 100vh;
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
  margin-bottom: 15px;
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

