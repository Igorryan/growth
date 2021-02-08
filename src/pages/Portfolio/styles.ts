import styled from 'styled-components'

import LayoutBase from '../../components/LayoutBase';
import Background from '../../assets/img/background-portfolio.png';

export const Wrapper = styled(LayoutBase)`
  background-image: url(${Background});
  background-position-y: -500px;
  background-position-x: -720px;

  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`