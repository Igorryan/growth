import React, { useMemo, useState } from 'react';
import * as S from './styles';

import {useLocation} from 'react-router-dom';

import ButtonBack from '../../assets/icons/arrow-back-in-container.svg';
import Icon from '../../assets/icons/icon.svg';
import Logo from '../../assets/icons/logo.svg';
import LogoBlack from '../../assets/img/logo-black.png'
import AmazonLogo from '../../assets/icons/amazonwebservices.svg';
import BMALogo from '../../assets/img/bma-advogados-logo.png'
import LinkedinIcon from '../../assets/icons/linkedin.svg'

const data = [
  {
    id: 1,
    route: '/',
    name: 'O que a Growth faz?',
  },
  {
    id: 2,
    route: '/journey',
    name: 'Nossa jornada',
  },
  {
    id: 3,
    route: '/how-we-do',
    name: 'Como fazemos?',
  },
  {
    id: 4,
    route: '/executives',
    name: 'Executivos',
  },
  {
    id: 5,
    route: '/portfolio',
    name: 'Portfólio',
  },
  {
    id: 6,
    route: '/contact',
    name: 'Contato',
  },
]

const NavigationMenu: React.FC = () => {
  const location = useLocation().pathname;

  const [menuVisible, setMenuVisible] = useState(true)
  const [linkSelected, setLinkSelected] = useState(1)

  useMemo(() => {
    const currentPage = data.find(l => l.route.indexOf(location) >= 0);
    currentPage && setLinkSelected(currentPage.id)
  }, [location])

  return (
    <S.Wrapper visible={menuVisible}>
      <S.ButtonBack src={ButtonBack} onClick={() => setMenuVisible(!menuVisible)}></S.ButtonBack>
  
      <S.OptionsListWrapper>
        <S.LogoSVG src={Icon} />
        <S.TitleSVG src={Logo} />
  
        <S.OptionsList>
          {data.map(({id, route, name}) => (
            <S.Link key={id} active={linkSelected === id} onClick={() => setLinkSelected(id)} to={route}>{name}</S.Link>
          ))}
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
