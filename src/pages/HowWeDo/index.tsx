import React, { useEffect } from 'react';
import * as S from './styles';
import {useNavigation} from '../../hooks/navigation'

import SliderHowWeDo from './Slider';
import BackgroundCorporate from '../../assets/img/background-corporate.png';

const HowWeDo: React.FC = () => {
  const {changeBackground} = useNavigation()

  useEffect(() => {
    changeBackground({background: BackgroundCorporate})
  }, [changeBackground])

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <SliderHowWeDo />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default HowWeDo;