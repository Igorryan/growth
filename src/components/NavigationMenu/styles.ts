import styled, {css, keyframes} from 'styled-components'
import {NavLink} from 'react-router-dom'

import ArrowIllustration from '../../assets/illustrations/arrow.svg'

import MenuIcon from '../../assets/icons/two-arrow-right.svg'

interface MenuProps {
  visible: boolean;
}

interface LinkProps {
  active: boolean
}

const loadingAnimation = keyframes`
  0% {
    width: 0px;
  }

  100% {
    width: 24px;
  }
`

export const Wrapper = styled.aside<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 20px;

  position: fixed;
  top: 0;

  background: #242424;

  width: 264px;
  height: 100vh;

  transition: all 0.3s ease-in-out;

  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 402px;

    width: 443px;
    height: 426px;

    background: url(${ArrowIllustration}) no-repeat;

    z-index: 0;
  }

  ${props => !props.visible && css`
    transform: translateX(-264px);
  `}
`

export const ButtonShowMenu = styled.div<MenuProps>`
  position: absolute;
  right: -56px;

  background: url(${MenuIcon}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  padding: 1px;

  cursor: pointer;

  transition: all 0.3s;
  transition-delay: 0.3s;

  ${props => !props.visible && css`
    transform: scale(0);
    transition-delay: 0s;
  `}
`

export const ButtonBack = styled.img`
  float: right;

  visibility: hidden;
  
  width: 24px;
  height: 24px;

  margin-right: 24px;
  cursor: pointer;

  @media (max-width: 1400px){
    visibility: visible;
  }
`

export const OptionsListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 68px;
`

export const LogoSVG = styled.img`
  width: 50px;
  height: 50px;
  
  margin-bottom: 57px;
`;

export const TitleSVG = styled.img`
  width: 130px;
  margin-bottom: 57px;
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

export const Link = styled(NavLink)<LinkProps>`
  text-decoration: none;
  color: #fff;
  margin-bottom: 20px;
  overflow: visible;

  &::after {
    content: '';
    
    position: absolute;
    left: 0;
    bottom: -6px;

    background: #70EAA6;

    height: 2px;

    transition: width 0.5s ease-in-out;
  }

  ${props => props.active && css`
    position: relative;
    color: #70EAA6;
    font-weight: 700;

    &::after {
      animation: ${loadingAnimation} 0.4s forwards ease-in;
    }
  }
  `}
`

export const Footer = styled.footer`
  width: 100%;

  ul {
    margin-left: 44px;
    margin-bottom: 32px;

    li {
      margin-bottom: 10px;

      font-size: 12px;
      color: #838383;
    }
  }
`

export const LogosWrapper = styled.div`
    margin-left: 44px;
    margin-bottom: 32px;
  
    img:first-of-type {
      margin-right: 12px;
    }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 63px;

  border: none;

  background: #70EAA6;

  font-size: 12px;

  img {
    margin-left: 11px;
  }
`


