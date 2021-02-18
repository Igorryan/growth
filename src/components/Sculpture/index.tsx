import React from 'react';
import * as S from './styles';

import SculptureImage from '../../assets/img/sculpture.png';

const Sculpture: React.FC = () => (
  <S.Wrapper>
    {/* <Tilt scale={1.12} glareEnable={false} transitionSpeed={20000}> */}
      <img width={450} src={SculptureImage} alt=""/>
    {/* </Tilt> */}
  </S.Wrapper>
)

export default Sculpture
