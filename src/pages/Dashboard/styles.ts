import styled from 'styled-components'

import BackgroundImage from '../../assets/img/background-1.png';
import LayoutBase from '../../components/LayoutBase';

export const Wrapper = styled(LayoutBase)`
  background-image: url(${BackgroundImage});
  background-position-y: -500px;
  background-position-x: -720px;

  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
  margin-left: 90px;

  > img {
    margin-right: 67px;
  }
`