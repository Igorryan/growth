import React, { HTMLAttributes } from 'react';
import * as S from './styles';
import Background from '../../assets/img/background-1.png'

const BackgroundImage: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => {
  return (
    <S.Wrapper style={{backgroundImage: `url(${Background})`}}>
      {children}
    </S.Wrapper>
  )
}

export default BackgroundImage
