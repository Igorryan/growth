import React from 'react';
import * as S from './styles';

import Slider from '../../components/Slider';

import Sculpture from '../../assets/img/sculpture.png';
import LayoutBase from '../../components/LayoutBase';

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <LayoutBase>
        <S.ContentWrapper>
          <img src={Sculpture} alt=""/>
          <Slider />
        </S.ContentWrapper>
      </LayoutBase>
    </S.Wrapper>
  )
}

export default Dashboard;