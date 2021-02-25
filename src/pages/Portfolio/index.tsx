import React, { useEffect } from 'react';
import * as S from './styles';
import {useNavigation} from '../../hooks/navigation'

import SliderCases from './Slider';
import BackgroundPortfolio from '../../assets/img/background-portfolio.png';

const Portfolio: React.FC = () => {
  const {changeBackground} = useNavigation()

  useEffect(() => {
    changeBackground({background: BackgroundPortfolio})
  }, [changeBackground])

  return (
    <S.Wrapper>
      <SliderCases></SliderCases>
    </S.Wrapper>
  )
}

export default Portfolio
