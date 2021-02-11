import styled from 'styled-components'

export const Wrapper = styled.button`
    float: right;
    margin-top: 16px;
    
    background: #70EAA6;
    border:none;
    height: 50px;
    border-radius: 100px;
    padding: 0 30px;
    min-width: 200px;
    
    opacity: 0.8;

    transition: all 0.4s;

    @media (max-width: 660px){
      float: none;
      width: 100%;
      margin: 0 auto;
    }

    &:hover {
      opacity: 1;
    }
`

