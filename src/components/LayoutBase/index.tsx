import React from 'react';
import * as S from './styles';

import BackgroundSvg from '../BackgroundSvg';

const LayoutBase: React.FC = ({ children, ...props}) => (
  <S.Wrapper {...props}>
      <BackgroundSvg />
      {children}
  </S.Wrapper>
)

export default LayoutBase
