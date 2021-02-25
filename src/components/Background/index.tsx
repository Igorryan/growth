import React, { useEffect, useState } from 'react';
import * as S from './styles';

import {useNavigation} from '../../hooks/navigation'

const Background: React.FC = () => {
  const {background} = useNavigation()
  const [thisBackground, setThisBackground] = useState('')

  useEffect(() => {
    if(background === ''){
      console.log('background = ""')
      return
    }

      setThisBackground(background)
  }, [background, thisBackground])

  return (
    <S.Wrapper style={{backgroundImage: `url(${thisBackground})`}} />
  )
}

export default Background
