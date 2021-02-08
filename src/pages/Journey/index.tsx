import React from 'react';
import * as S from './styles';

import SliderJourney from '../../components/SliderJourney';

import Sculpture from '../../assets/img/sculpture.png';

const Journey: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <img src={Sculpture} alt=""/>
        <SliderJourney />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Journey;