import React from 'react';
import * as S from './styles';

import Slider from './Slider';
import Sculpture from '../../assets/img/sculpture.png';

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <img src={Sculpture} alt=""/>
        <Slider />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Home;