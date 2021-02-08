import styled from 'styled-components'

import BackgroundImage from '../../assets/img/background-1.png';


export const Wrapper = styled.main`
  z-index: 0;

  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: -500px;
  background-position-x: -720px;

  position: fixed;

  width: 100vw;
  height: 200vh;

  > svg {
    z-index: 0;
  }
`

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 868px;
  height: 100vh;

  margin-left: 384px;

  > img {
    margin-right: 47px;
  }
`