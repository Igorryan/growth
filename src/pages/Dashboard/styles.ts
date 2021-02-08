import styled from 'styled-components'

import BackgroundImage from '../../assets/img/background-1.png';


export const Wrapper = styled.main`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: -500px;
  background-position-x: -720px;

  position: fixed;

  width: 100vw;
  height: 200vh;
`



export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
  margin-left: 125px;

  > img {
    margin-right: 47px;
  }
`