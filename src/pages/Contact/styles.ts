import styled from 'styled-components'

import LayoutBase from '../../components/LayoutBase';
import { Entrances } from '../../styles/animations';

export const Wrapper = styled(LayoutBase)`
  background-color: #000;
  overflow-y: hidden;

  ${Entrances.fade_in_bck}

`

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 115px;

  ${Entrances.fade_in_bottom}

  @media (max-width: 1200px){
    padding-left: 35px;
  }
`

export const Title = styled.h1`
  line-height: 10px;
  overflow: visible;

  font-size: 43px;
  text-transform: uppercase;

  color:#70EAA6;
  margin-bottom: 45px;

  @media (max-width: 660px){
    margin-bottom: 30px;
    margin-top: 24px;
    font-size: 36px;
    width: 80%;
    line-height: 40px;
  }
`

export const Description = styled.p`
  color: #B7B7B7;

  line-height: 26px;

  span {
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 660px){
    font-size: 14px;
    width: 220px;
  }
`

export const Form = styled.form`
  display: flex;

  overflow: visible;
  margin-top: 40px;

  @media (max-width: 660px){
    flex-direction: column;
    width: 100%;
  }
`

export const InputsColumns = styled.div`
  overflow: visible;

  & + div {
    margin-left: 30px;
  }

  @media (max-width: 660px){
    & + div {
      margin-left: 0px;
    }
  }

`

export const InputWrapper = styled.div`
  width: 260px;
  margin-bottom: 30px;

  position: relative;
  overflow: visible;
  background: #000;

  span {
    position: absolute;

    left: 16px;
    top: -8px;

    font-size: 14px;

    background: #000;
    padding: 0 10px;
  }

  textarea {
    height: 146px;
  }

  input, textarea {
    min-width: 260px;
    padding: 20px;
    background: #000;
    
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 4px;
    
    color: #fff;
    
    font-size: 14px;
    font-weight: 700;

    transition: all 0.2s;

    &::placeholder {
      font-weight: normal;
    }

    &:focus {
      border-color: #70EAA6;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active,
    &:-webkit-autofill:valid
    {
      -webkit-transition-delay: 99999s;
      -webkit-text-fill-color:#fff;
      -webkit-background-clip: text;
    }
  }

  @media (max-width: 660px){
    width: 92%;

    input, textarea {
      width: 100%;
    }
  }
`

export const Button = styled.button`
  float: right;
  margin-top: 16px;
  
  background: #70EAA6;
  border:none;
  padding: 10px 40px;
  border-radius: 100px;

  transition: all 0.4s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 660px){
    float: none;
    width: 92%;
    margin: 0 auto;
  }
`

