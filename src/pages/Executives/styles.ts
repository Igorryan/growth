import styled from 'styled-components'
import {Entrances} from '../../styles/animations'

import LayoutBase from '../../components/LayoutBase';
import ArrowMinIcon from '../../assets/icons/arrow-min.svg'

export const Wrapper = styled(LayoutBase)`
  background-color: #191919;
  background-position-y: -500px;
  background-position-x: -720px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding-top: 60px;
  padding-left: 115px;

  @media (max-width: 1350px){
    padding-left: 25px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;

  color:#70EAA6;
  margin-bottom: 45px;

  @media (max-width: 500px){
    margin-top: 20px;
  }
`

export const ExecutivesWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  gap: 12px;

  @media (max-width: 1150px){
    margin-right: 50px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px){
    grid-template-columns: 250px 250px 250px;
  }

  @media (max-width: 890px){
    margin-right: 50px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px){
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px){
    margin-right: 30px;
  }
`

export const Executive = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 364px;

  background-color: #191919;

  border: 1px solid #414141;
  border-radius: 6px;

  ${Entrances.flip_in_ver_right}

  @media (max-width: 1150px){
    width: 100%;
  }

  @media (max-width: 890px){
    width: 100%;

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`

export const ProfileImage = styled.div`
  margin-bottom: 30px;
  border: 1px solid #70EAA6;
  border-radius: 50%;

  width: 170px;
  height: 170px;
  
  position: relative;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;

    width: 30px;
    height: 30px;

    bottom: -14px;
    left: 60%;

    background-image: url(${ArrowMinIcon});
    background-size: cover;
  }
`

export const Name = styled.strong`
 color:#70EAA6;
 margin-bottom: 8px;
`

export const Ocuppation = styled.span`
  color: #B1B1B1;

  font-size: 14px;
  margin-bottom: 26px;
  text-align: center;
  line-height: 20px;

  width: 70%;
  min-height: 40px;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -8px;
`

export const LinkedinIcon = styled.svg`
  margin-right: 10px;
`

export const Link = styled.a`
  color: #B1B1B1;

  font-size: 14px;  
`
