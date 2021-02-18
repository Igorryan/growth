import styled from 'styled-components'

import BackgroundHome from '../../assets/img/background-1.png'
import LayoutBase from '../../components/LayoutBase';
import { Entrances } from '../../styles/animations';

export const Wrapper = styled(LayoutBase)`
  z-index: 0;
  background-image: url(${BackgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
  
  ${Entrances.fade_in_bck}
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
  margin-left: 90px;
  overflow:visible;

  @media (min-width: 2370px){
    margin-left: 200px;
  }

  @media (max-width: 1000px){
    margin-left: 70px;
  }

  @media (max-width: 1400px){
    margin-left: 0px;
    justify-content: center;
  }

  @media (max-width: 800px){
    justify-content: flex-start;
    flex-direction: column;
    
    margin-top: 95px;

    height: max-content;
  }
`