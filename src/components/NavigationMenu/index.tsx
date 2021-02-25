import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import * as S from './styles';

import { useLocation, useHistory } from 'react-router-dom';

import ButtonBack from '../../assets/icons/arrow-back-in-container.svg';
import Icon from '../../assets/icons/icon.svg';
import Logo from '../../assets/icons/logo.svg';
import LogoBlack from '../../assets/img/logo-black.png'
import AmazonLogo from '../../assets/icons/amazonwebservices.svg';
import BMALogo from '../../assets/icons/bma-advogados-logo.svg'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import MenuIcon from '../../assets/icons/two-arrow-right.svg'

import data from '../../routes/data'

const NavigationMenu: React.FC = () => {
  const location = useLocation().pathname;
  const history = useHistory();

  const [menuVisible, setMenuVisible] = useState(true)
  const [showMenuActive, setShowMenuActive] = useState(true)
  const [linkSelected, setLinkSelected] = useState(1)
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyResponsivenessEffect()

    window.addEventListener('resize', () => {
      applyResponsivenessEffect()
    })

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setShowMenuActive(false)
      } else {
        setShowMenuActive(true)
      }
    })

    function applyResponsivenessEffect() {
      if (window.innerWidth < 1000) {
        setMenuVisible(false)
        return false;
      }

      setMenuVisible(true)
      return true;
    }
  }, [])

  const handleClickAsideComponent = useCallback((e) => {
    if (!asideRef.current) {
      return
    }

    if (asideRef.current.contains(e.target)) {
      return;
    }

    if (window.innerWidth <= 1001) {
      setMenuVisible(false);
    }

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

  const handleNavigate = useCallback(({ id, route }) => {
    setLinkSelected(id)
    window.scrollTo(0, 0);
    if (window.innerWidth <= 1001) {
      setMenuVisible(false);
    }
    history.push(route)
  }, [history])

  return (
    <S.Wrapper ref={asideRef} visible={menuVisible}>
      <S.ButtonShowMenu active={showMenuActive} onClick={() => setMenuVisible(!menuVisible)} visible={!menuVisible}>
        <img src={MenuIcon} alt="" />
      </S.ButtonShowMenu>

      <div style={{ width: '100%' }}>
        <S.ButtonBack src={ButtonBack} onClick={() => setMenuVisible(!menuVisible)}></S.ButtonBack>
      </div>

      <S.OptionsListWrapper>
        <S.LogoSVG onClick={() => history.push('/')} src={Icon} />
        <S.TitleSVG onClick={() => history.push('/')} src={Logo} />

        <S.OptionsList>
          {data.map(({ id, route, name }) => (
            <S.Link key={id} active={linkSelected === id} onClick={() => handleNavigate({ id, route })}>{name}</S.Link>
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
          <img src={AmazonLogo} width={70} alt="" />
          <img src={BMALogo} width={100} alt="" />
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
