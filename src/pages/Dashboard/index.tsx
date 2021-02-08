import React from 'react';
import * as S from './styles';

import NavigationMenu from '../../components/NavigationMenu';
import Slider from '../../components/Slider';

import Sculpture from '../../assets/img/sculpture.png';

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <NavigationMenu />

      <S.Section>
        <img src={Sculpture} alt=""/>
        <Slider />
      </S.Section>
    </S.Wrapper>
  )
}

export default Dashboard;