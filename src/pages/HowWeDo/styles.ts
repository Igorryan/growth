import styled from 'styled-components'

import BackgroundImage from '../../assets/img/background-corporate.png';
import LayoutBase from '../../components/LayoutBase';

export const Wrapper = styled(LayoutBase)`
  background-image: url(${BackgroundImage});
  background-position-x: 0px !important;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  height: 100vh;
  margin-left: 120px;

  @media (max-width: 1200px){
    margin-left: 30px;
  }

  @media (max-width: 600px){
    margin-left: 0px;
    justify-content: center;
  }
`