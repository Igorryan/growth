import React, { useMemo, useState } from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';

import data from '../../routes/data'

const BackgroundImage: React.FC = () => {
  const location = useLocation().pathname;
  const [background, setBackground] = useState(data[1].background)
  const [backgroundAnimation, setBackgroundAnimation] = useState('in')

  useMemo(() => {
    const currentPage = data.find(l => l.route.indexOf(location) >= 0);

    setBackgroundAnimation('out')

    setTimeout(() => {
      currentPage && setBackground(currentPage.background)
      setBackgroundAnimation('in')
    }, 600)

  }, [location])

  return (
    <S.Wrapper animation={backgroundAnimation} style={{backgroundImage: `url(${background})`}}>
    </S.Wrapper>
  )
}

export default BackgroundImage
