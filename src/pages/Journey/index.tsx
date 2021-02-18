import React from 'react';
import * as S from './styles';

import SliderJourney from './Slider';
import Sculpture from '../../components/Sculpture';

const Journey: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Sculpture />
        <SliderJourney />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Journey;