import styled from 'styled-components'

import LayoutBase from '../../components/LayoutBase';

export const Wrapper = styled(LayoutBase)`
  background-color: #000;

`

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 115px;
  `

export const Title = styled.h1`
  line-height: 10px;
  overflow: visible;

  font-size: 43px;
  text-transform: uppercase;

  color:#70EAA6;
  margin-bottom: 45px;
`

export const Description = styled.p`
  color: #B7B7B7;

  line-height: 26px;

  margin-bottom: 30px;

  span {
    color: #fff;
    font-weight: bold;
  }
`

export const Form = styled.form`
  display: flex;

  overflow: visible;
`

export const InputsColumns = styled.div`
  overflow: visible;

  & + div {
    margin-left: 30px;
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
`

