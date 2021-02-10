import styled from 'styled-components'

import BackgroundImage from '../../assets/img/background-1.png';

export const Wrapper = styled.main`
  z-index: 0;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: -500px;

  position: fixed;

  width: 100vw;
  height: 200vh;

  svg {
    float: right;
  }
`