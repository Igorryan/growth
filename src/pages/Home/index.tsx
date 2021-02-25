import React, { useEffect } from 'react';
import * as S from './styles';
import {useNavigation} from '../../hooks/navigation'

import Slider from './Slider';
import Sculpture from '../../components/Sculpture';
import BackgroundHome from '../../assets/img/background-1.png'

const Home: React.FC = () => {
  const {changeBackground} = useNavigation()

  useEffect(() => {
    changeBackground({background: BackgroundHome})
  }, [changeBackground])

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Sculpture />
        <Slider />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Home;