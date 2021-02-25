import React, { useEffect, useState } from 'react';
import * as S from './styles';

import {useNavigation} from '../../hooks/navigation'

const Background: React.FC = () => {
  const {background} = useNavigation()
  const [thisBackground, setThisBackground] = useState('')
  const [height, setHeight] = useState('0')

  useEffect(() => {
    setHeight('0')

    if(background === ''){
      console.log('background = ""')
      return
    }

    setTimeout(() => {
      setThisBackground(background)
      setHeight('100vh')
    }, 300)
  }, [background, thisBackground])

  return (
    <S.Wrapper style={{backgroundImage: `url(${thisBackground})`, height: height}} />
  )
}

export default Background
