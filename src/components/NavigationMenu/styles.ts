import styled from 'styled-components'

import ArrowIllustration from '../../assets/illustrations/arrow.svg'

export const Wrapper = styled.aside`
  position: relative;

  background: #242424;

  width: 264px;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 372px;

    width: 443px;
    height: 426px;

    background: url(${ArrowIllustration}) no-repeat;

    z-index: 0;
  }
`

export const ButtonBack = styled.img`
  position: absolute;

  top: 20px;
  right: 24px;
`

export const OptionsListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  left: 72px;
  top: 126px;
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
  font-size: 14px;

  li {
    margin-bottom: 20px;
    overflow: visible;
    cursor: pointer;

    &.active {
      position: relative;

      color: #70EAA6;
      font-weight: 700;

      &::after {
        content: '';
        
        position: absolute;
        left: 0;
        bottom: -5px;

        background: #70EAA6;

        height: 2px;
        width: 14px;

        transition: width 0.4s ease-in-out;
      }
    }

    &.active:hover {

      &::after {
        width: 50%;
      }
    }
  }
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;

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


