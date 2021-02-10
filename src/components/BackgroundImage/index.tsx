import React, { HTMLAttributes, useState } from 'react';
import * as S from './styles';
import Background from '../../assets/img/background-1.png'

const BackgroundImage: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => {
  const [background, setBackground] = useState(Background)

  return (
    <S.Wrapper style={{backgroundImage: `url(${background})`}}>
      {children}
    </S.Wrapper>
  )
}

export default BackgroundImage
