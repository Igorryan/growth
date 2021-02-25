import styled, {css, keyframes} from 'styled-components'

import ArrowIllustration from '../../assets/illustrations/arrow.svg'

interface MenuProps {
  visible?: boolean;
  active?: boolean;
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

  padding-top: 24px;

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

    width: 100%;
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
  right: -50px;

  background-color: #171717;
  padding-left: 14px;

  display: flex;
  align-items: center;

  width: 50px;
  height: 44px;

  border-radius: 0 100px 100px 0;

  cursor: pointer;

  transition: all 0.3s;
  transition-delay: 0.3s;

  img {
    width: 26px;
    height: 26px;
  }

  ${props => !props.visible && css`
    transform: scale(0);
    transition-delay: 0s;
  `}

  ${props => !props.active && props.visible && css`
    transform: translateX(-22px);
    transition-delay: 0s;
    opacity: 0.4;
  `}
`

export const ButtonBack = styled.img`
  float: right;

  visibility: hidden;
  
  width: 24px;
  height: 24px;

  margin-right: 24px;
  cursor: pointer;

  @media (max-width: 1000px){
    visibility: visible;
  }

  @media (max-width: 500px){
    position: absolute;
    right: 0px;
  }

  @media (max-height: 700px){
    position: absolute;
    right: 0px;
  }
`

export const OptionsListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 68px;

  @media (max-width: 500px){
    margin-left: 44px;
  }

  @media (max-height: 700px){
    margin-left: 44px;
  }
`

export const LogoSVG = styled.img`
  width: 50px;
  height: 50px;
  
  margin-bottom: 57px;

  cursor: pointer;

  @media (max-width: 500px){
    width: 40px;
    height: 40px;

    margin-bottom: 30px;
  }

  @media (max-height: 700px){
    width: 40px;
    height: 40px;

    margin-bottom: 30px;
  }
`;

export const TitleSVG = styled.img`
  width: 130px;
  margin-bottom: 57px;

  cursor: pointer;

  @media (max-width: 500px){
    margin-bottom: 30px;
  }

  @media (max-height: 700px){
    margin-bottom: 30px;
  }
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

export const Link = styled.li<MenuProps>`
  text-decoration: none;
  color: #fff;
  margin-bottom: 20px;
  overflow: visible;
  cursor: pointer;

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

  @media (max-width: 500px){
    ul {
    margin-bottom: 12px;
    }
  }

  @media (max-height: 700px){
    ul {
    margin-bottom: 12px;
    }
  }
`

export const LogosWrapper = styled.div`
  margin-left: 44px;
  margin-bottom: 32px;

  img:first-of-type {
    margin-right: 12px;
  }

  @media (max-height: 570px){
    display: none;
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


