import React from 'react';
import * as S from './styles';

import Slider from '../../components/Slider';

import Sculpture from '../../assets/img/sculpture.png';

const Journey: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <img src={Sculpture} alt=""/>
        <Slider />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Journey;