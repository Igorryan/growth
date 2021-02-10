import styled from 'styled-components'

import BackgroundJourney from '../../assets/img/background-journey.png';
import LayoutBase from '../../components/LayoutBase';
import { Entrances } from '../../styles/animations';

export const Wrapper = styled(LayoutBase)`
  background-position-y: -500px;
  background-position-x: -720px;

  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: url(${BackgroundJourney});

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
    margin-left: 40px;
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

    margin-left: 0px;

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