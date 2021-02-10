import styled from 'styled-components'

import BackgroundCorporate from '../../assets/img/background-corporate.png';
import LayoutBase from '../../components/LayoutBase';
import { Entrances } from '../../styles/animations';

export const Wrapper = styled(LayoutBase)`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  overflow-y: hidden;

  background-image: url(${BackgroundCorporate});
  
  ${Entrances.fade_in_bck}

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