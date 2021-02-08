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
  const [linkSelected, setLinkSelected] = useState(1)

  return (
    <S.Wrapper visible={menuVisible}>
      <S.ButtonBack src={ButtonBack} onClick={() => setMenuVisible(!menuVisible)}></S.ButtonBack>
  
      <S.OptionsListWrapper>
        <S.LogoSVG src={Icon} />
        <S.TitleSVG src={Logo} />
  
        <S.OptionsList>
          <S.Link active={linkSelected === 1} onClick={() => setLinkSelected(1)} to="/">O que a Growth faz?</S.Link>
          <S.Link active={linkSelected === 2} onClick={() => setLinkSelected(2)} to="/">Nossa Jornada</S.Link>
          <S.Link active={linkSelected === 3} onClick={() => setLinkSelected(3)} to="/executives">Executivos</S.Link>
          <S.Link active={linkSelected === 4} onClick={() => setLinkSelected(4)} to="/portfolio">Portfólio</S.Link>
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
