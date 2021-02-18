import React from 'react';
import * as S from './styles';

import Slider from './Slider';
import Sculpture from '../../components/Sculpture';

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Sculpture />
        <Slider />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Home;