import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import * as S from './styles';

import { useLocation } from 'react-router-dom';

import ButtonBack from '../../assets/icons/arrow-back-in-container.svg';
import Icon from '../../assets/icons/icon.svg';
import Logo from '../../assets/icons/logo.svg';
import LogoBlack from '../../assets/img/logo-black.png'
import AmazonLogo from '../../assets/icons/amazonwebservices.svg';
import BMALogo from '../../assets/icons/bma-advogados-logo.svg'
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
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyResponsivenessEffect()

    window.addEventListener('resize', () => {
      applyResponsivenessEffect()
    })

    function applyResponsivenessEffect() {
      if (window.innerWidth < 1400) {
        setMenuVisible(false)
        return false;
      }
      
      setMenuVisible(true)
      return true;
    }
  }, [])

  const handleClickAsideComponent = useCallback((e) => {
    if(!asideRef.current){
      return
    }

    if (asideRef.current.contains(e.target)) {
      return;
    }
    
    setMenuVisible(false);
  }, [])

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickAsideComponent);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickAsideComponent);
    };
  }, [handleClickAsideComponent]);

  useMemo(() => {
    const currentPage = data.find(l => l.route.indexOf(location) >= 0);
    currentPage && setLinkSelected(currentPage.id)
  }, [location])

  return (
    <S.Wrapper ref={asideRef} visible={menuVisible}>

      <S.ButtonShowMenu onClick={() => setMenuVisible(!menuVisible)} visible={!menuVisible} />

      <div style={{ width: '100%' }}>
        <S.ButtonBack src={ButtonBack} onClick={() => setMenuVisible(!menuVisible)}></S.ButtonBack>
      </div>

      <S.OptionsListWrapper>
        <S.LogoSVG src={Icon} />
        <S.TitleSVG src={Logo} />

        <S.OptionsList>
          {data.map(({ id, route, name }) => (
            <S.Link key={id} active={linkSelected === id} onClick={() => setLinkSelected(id)} to={route}>{name}</S.Link>
          ))}
        </S.OptionsList>
      </S.OptionsListWrapper>

      <S.Footer>
        <ul>
          <li><img src={LogoBlack} alt="" /></li>
          <li style={{ marginBottom: '8px' }}>Termo de Uso</li>
          <li>Política de Privacidade</li>
        </ul>

        <S.LogosWrapper>
          <img src={AmazonLogo} alt="" />
          <img src={BMALogo} width={110} alt="" />
        </S.LogosWrapper>

        <S.Button>
          Rede social
          <img src={LinkedinIcon} alt="" />
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default NavigationMenu
