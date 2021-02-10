import styled from 'styled-components'

import BackgroundPortfolio from '../../assets/img/background-portfolio.png';
import LayoutBase from '../../components/LayoutBase';
import { Entrances } from '../../styles/animations';

export const Wrapper = styled(LayoutBase)`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100vw;
  height: 100vh;

  background: url(${BackgroundPortfolio});

  ${Entrances.flip_in_hor_bottom}

`