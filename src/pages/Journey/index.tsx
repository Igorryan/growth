import React, { useEffect } from 'react';
import * as S from './styles';
import {useNavigation} from '../../hooks/navigation'

import SliderJourney from './Slider';
import Sculpture from '../../components/Sculpture';
import BackgroundJourney from '../../assets/img/background-journey.png';

const Journey: React.FC = () => {
  const {changeBackground} = useNavigation()

  useEffect(() => {
    changeBackground({background: BackgroundJourney})
  }, [changeBackground])

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Sculpture />
        <SliderJourney />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Journey;