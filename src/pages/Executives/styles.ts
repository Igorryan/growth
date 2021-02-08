import styled from 'styled-components'

import LayoutBase from '../../components/LayoutBase';

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
  padding-bottom: 60px;
  padding-left: 115px;

  > img {
    margin-right: 47px;
  }
`

export const Title = styled.h1`
  font-size: 43px;
  text-transform: uppercase;

  margin-bottom: 45px;
`

export const ExecutivesWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  gap: 12px;
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
`

export const ProfileImage = styled.img`
  margin-bottom: 30px;
  border: 1px solid #70EAA6;
  border-radius: 50%;
`

export const ArrowIcon = styled.img`
  position: absolute;
  top: 180px;
  right: 66px;
`

export const Name = styled.strong`
 color:#70EAA6;
 margin-bottom: 8px;
`

export const Ocuppation = styled.span`
  color: #B1B1B1;

  font-size: 14px;
  margin-bottom: 26px;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkedinIcon = styled.svg`
  margin-right: 10px;
`

export const Link = styled.a`
  color: #B1B1B1;

  font-size: 14px;  
`
