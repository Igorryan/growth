import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => (
  <S.Wrapper {...props}>
    {children}
  </S.Wrapper>
)

export default Button
