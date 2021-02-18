import styled, { keyframes } from 'styled-components'

const bottomToTop = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    transform: translate3d(0,200px, 0)
  }
  100% {
    stroke-width: 1.5;
    stroke-dasharray: 100 0;
    transform: translate3d(0,-200px, 0)
  }
`
const bottomToTop2 = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    transform: translate3d(0,200px, 0)
  }
  100% {
    stroke-width: 1.5;
    stroke-dasharray: 100 0;
    transform: translate3d(0, -120px, 0)
  }
`
const topToBottom = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    transform: translate3d(0,-200px, 0)
  }
  100% {
    stroke-width: 1.5;
    stroke-dasharray: 100 0;
    transform: translate3d(0,200px, 0)
  }
`
const bottomToTop3 = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    transform: translate3d(0,200px, 0)
  }
  100% {
    stroke-width: 1.5;
    stroke-dasharray: 100 0;
    transform: translate3d(0, -120px, 0)
  }
`
const leftToRight = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    transform: translate3d(-600px, 0, 0)
  }
  100% {
    stroke-width: 1.5;
    stroke-dasharray: 100 0;
    transform: translate3d(0px, 0, 0)
  }
`
const rightToLeft = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    transform: translate3d(600px, 0, 0)
  }
  100% {
    stroke-width: 1.5;
    stroke-dasharray: 100 0;
    transform: translate3d(0px, 0, 0)
  }
`
export const BackgroundSVG = styled.svg`
  background: transparent;

  position: fixed;
  top: 0;
  margin-left: -30px;


  path:nth-of-type(1) {
    animation: ${bottomToTop} 20s ease infinite alternate;
  }

  path:nth-of-type(2) {
    animation: ${topToBottom} 20s ease infinite alternate;
  }
  
  path:nth-of-type(3) {
    animation: ${bottomToTop} 22s ease infinite alternate;
  }

  path:nth-of-type(4) {
    animation: ${leftToRight} 20s ease infinite alternate;
  }

  path:nth-of-type(5) {
    animation: ${rightToLeft} 22s ease infinite alternate;
  }

  path:nth-of-type(6) {
    animation: ${bottomToTop2} 20s ease infinite alternate;
  }
  path:nth-of-type(7) {
    animation: ${bottomToTop2} 22s ease infinite alternate;
  }
  path:nth-of-type(8) {
    animation: ${bottomToTop2} 20s ease infinite alternate;
  }
  path:nth-of-type(9) {
    animation: ${bottomToTop3} 22s ease infinite alternate;
  }


  @media (min-width: 1930px){
    margin-left: 0px;
    left: 0;
    width: 100vw;
    transform: scale(1.2)
  }
`

