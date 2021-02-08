import React, { useState } from 'react';
import * as S from './styles';

import BackgroundImage from '../../assets/img/background-corporate.png';
import SliderHowWeDo from '../../components/SliderHowWeDo';

const HowWeDo: React.FC = () => {
  const [background, setBackground] = useState(BackgroundImage)

  return (
    <S.Wrapper style={{backgroundImage: `url(${background})`}}>
      <S.ContentWrapper>
        <SliderHowWeDo changeBackground={setBackground} />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default HowWeDo;