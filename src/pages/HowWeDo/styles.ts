import styled from 'styled-components'

import BackgroundImage from '../../assets/img/background-corporate.png';
import LayoutBase from '../../components/LayoutBase';

export const Wrapper = styled(LayoutBase)`
  background-image: url(${BackgroundImage});
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  overflow-y: hidden;

  @media (max-width: 1200px){
    background-position: right;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  overflow-y: hidden;


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