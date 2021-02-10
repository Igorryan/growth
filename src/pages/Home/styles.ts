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
  
  ${Entrances.flip_in_hor_bottom}

`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;
  margin-left: 90px;

  > img {
    margin-right: 67px;
  }

  @media (min-width: 2370px){
    margin-left: 200px;
  }

  @media (max-width: 1000px){
    margin-left: 70px;
  }

  @media (max-width: 1400px){
    margin-left: 0px;
    justify-content: center;

    > img {
      width: 270px;
    }
  }

  @media (max-width: 800px){
    justify-content: flex-start;
    flex-direction: column;
    
    margin-top: 95px;

    height: max-content;

    > img {
      position: absolute;
      bottom: -100px;
      left: -100px;
      width: 400px;
    }
  }

  @media (max-width: 800px) and (max-height: 1000px){
    > img {
      display: none;
    }
  }
`