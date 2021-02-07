import React from 'react';
import * as S from './styles';

import NavigationMenu from '../../components/NavigationMenu';

const Dashboard: React.FC = () => {
  return (
    <S.Wrapper>
      <NavigationMenu />
    </S.Wrapper>
  )
}

export default Dashboard;