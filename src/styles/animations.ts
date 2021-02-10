import { keyframes, css } from 'styled-components'

// Entrances
export const swing_in_top_fwd = css`
  animation: ${keyframes`
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  `} 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
`
export const fade_in_bck = css`
  animation: ${keyframes`
    0% {
      transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  `} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

// Text
export const swirl_in_top_fwd = css`
  animation: ${keyframes`
  0% {
    transform: rotate(-540deg) scale(0);
    transform-origin: 50% 0;
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    transform-origin: 50% 0;
    opacity: 1;
  }
`} 0.6s ease-out both;
`
export const tracking_in_contract_bck = css`
  animation: ${keyframes`
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`} 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
`
export const focus_in_contract = css`
  animation: ${keyframes`
  0% {
    letter-spacing: 1em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

// Exits
export const swing_out_top_bck = css`
  animation: ${keyframes`
    0% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
    100% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
  `} 0.45s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
`
export const fade_out_bck = css`
  animation: ${keyframes`
    0% {
      transform: translateZ(0);
      opacity: 1;
    }
    100% {
      transform: translateZ(-80px);
      opacity: 0;
    }
  `} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

// Declarations

export const Entrances = {
  swing_in_top_fwd,
  fade_in_bck
}

export const Text = {
  swirl_in_top_fwd,
  tracking_in_contract_bck,
  focus_in_contract
}

export const Exits = {
  swing_out_top_bck,
  fade_out_bck
}

const Animations = {
  Entrances,
  Text,
  Exits
}

export default Animations;