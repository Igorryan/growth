import styled from 'styled-components'

import LayoutBase from '../../components/LayoutBase';

export const Wrapper = styled(LayoutBase)`
  background-position-x: 0px !important;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  height: 100vh;
  margin-left: 120px;
`