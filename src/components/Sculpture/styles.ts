import styled from 'styled-components'
import { Motions } from '../../styles/animations'

export const Wrapper = styled.div`
  overflow: visible;
  ${Motions.graviting}

  img {
    overflow: visible;
    margin-right: 67px;
  }

  @media (max-width: 1400px){
    img {
      width: 270px;
    }
  }

  @media (max-width: 800px){
    img {
      position: absolute;
      bottom: -100px;
      left: -100px;
      width: 400px;
    }
  }

  @media (max-width: 800px) and (max-height: 1000px){
    img {
      display: none;
    }
  }
`

