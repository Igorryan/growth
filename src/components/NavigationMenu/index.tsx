import React, { useState } from 'react';
import * as S from './styles';

import ButtonBack from '../../assets/icons/arrow-back-in-container.svg';
import Icon from '../../assets/icons/icon.svg';
import Logo from '../../assets/icons/logo.svg';
import LogoBlack from '../../assets/img/logo-black.png'
import AmazonLogo from '../../assets/icons/amazonwebservices.svg';
import BMALogo from '../../assets/img/bma-advogados-logo.png'
import LinkedinIcon from '../../assets/icons/linkedin.svg'

const NavigationMenu: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(true)

  return (
    <S.Wrapper visible={menuVisible}>
      <S.ButtonBack src={ButtonBack} onClick={() => setMenuVisible(!menuVisible)}></S.ButtonBack>
  
      <S.OptionsListWrapper>
        <S.LogoSVG src={Icon} />
        <S.TitleSVG src={Logo} />
  
        <S.OptionsList loading={14}>
          <li className="active">O que a Growth faz?</li>
          <li>Nossa Jornada</li>
          <li>Executivos</li>
          <li>Portfólio</li>
        </S.OptionsList>
      </S.OptionsListWrapper>
  
      <S.Footer>
        <ul>
          <li><img src={LogoBlack} alt="" /></li>
          <li style={{marginBottom: '8px'}}>Termo de Uso</li>
          <li>Política de Privacidade</li>
        </ul>
  
        <S.LogosWrapper>
          <img src={AmazonLogo} alt=""/>
          <img src={BMALogo} alt=""/>
        </S.LogosWrapper>
  
        <S.Button>
          Rede social 
          <img src={LinkedinIcon} alt=""/>
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default NavigationMenu
