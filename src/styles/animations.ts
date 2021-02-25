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
export const fade_in_bottom = css`
  animation: ${keyframes`
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`
export const slide_in_bottom = css`
  animation: ${keyframes`
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const slide_in_blurred_bottom = css`
  animation: ${keyframes`
    0% {
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 100%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  `} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`
export const roll_in_blurred_left = css`
  animation: ${keyframes`
    0% {
      transform: translateX(-1000px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
  `} 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`
export const scale_in_center = css`
  animation: ${keyframes`
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const scale_in_hor_center = css`
  animation: ${keyframes`
    0% {
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const scale_in_hor_left = css`
  animation: ${keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const scale_in_ver_center = css`
  animation: ${keyframes`
  0% {
    transform: scaleY(0);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const flip_in_diag_2_br = css`
  animation: ${keyframes`
  0% {
    transform: rotate3d(-1, 1, 0, -80deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const flip_in_hor_bottom = css`
  animation: ${keyframes`
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const flip_in_ver_right = css`
  animation: ${keyframes`
    0% {
      transform: rotateY(-80deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  `} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const swirl_in_bck = css`
  animation: ${keyframes`
  0% {
    transform: rotate(540deg) scale(5);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
  `} 0.65s ease-out both;
`
export const swirl_in_fwd = css`
  animation: ${keyframes`
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
  `} 0.6s ease-out both;
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
export const slide_out_bottom = css`
  animation: ${keyframes`
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(1000px);
      opacity: 0;
    }
  `} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`
export const slide_out_blurred_bottom = css`
  animation: ${keyframes`
    0% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
    100% {
      transform: translateY(1000px) scaleY(2) scaleX(0.2);
      transform-origin: 50% 100%;
      filter: blur(40px);
      opacity: 0;
    }
  `} 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
`
export const flip_out_hor_bottom = css`
  animation: ${keyframes`
    0% {
      transform: rotateX(0);
      opacity: 1;
    }
    100% {
      transform: rotateX(-70deg);
      opacity: 0;
    }
  `} 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`
export const rotate_out_center = css`
  animation: ${keyframes`
  0% {
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    opacity: 0;
  }
  `} 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`
export const swirl_out_fwd = css`
  animation: ${keyframes`
  0% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: rotate(540deg) scale(5);
    opacity: 0;
  }
  `} 0.65s ease-in both;
`
export const scale_out_vertical = css`
  animation: ${keyframes`
  0% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    opacity: 1;
  }
  `} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
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

// Motions
export const graviting = css`
  animation: ${keyframes`
  from {
    -webkit-transform: translateY(-0.5rem);
    -ms-transform: translateY(-0.5rem);
    transform: translateY(-0.5rem);
  }
  to {
    -webkit-transform: translateY(0.5rem);
    -ms-transform: translateY(0.5rem);
    transform: translateY(0.5rem);
  }
`} 4s ease-in-out infinite alternate;
`

// Declarations
export const Entrances = {
  swing_in_top_fwd,
  fade_in_bottom,
  fade_in_bck,
  slide_in_bottom,
  slide_in_blurred_bottom,
  roll_in_blurred_left,
  scale_in_center,
  scale_in_hor_center,
  scale_in_hor_left,
  scale_in_ver_center,
  flip_in_ver_right,
  flip_in_hor_bottom,
  flip_in_diag_2_br,
  swirl_in_bck,
  swirl_in_fwd
}

export const Exits = {
  swing_out_top_bck,
  fade_out_bck,
  slide_out_bottom,
  slide_out_blurred_bottom,
  flip_out_hor_bottom,
  rotate_out_center,
  swirl_out_fwd,
  scale_out_vertical
}

export const Text = {
  swirl_in_top_fwd,
  tracking_in_contract_bck,
  focus_in_contract
}

export const Motions = {
  graviting
}

const Animations = {
  Entrances,
  Exits,
  Text,
  Motions
}

export default Animations;