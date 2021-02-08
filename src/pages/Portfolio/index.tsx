import React from 'react';
import * as S from './styles';

import Logo2Shared from '../../assets/img/logo-2share.png'

const Portfolio: React.FC = () => (
  <S.Wrapper>
    <S.ContentWrapper>
      <S.Title>Portfólio</S.Title>
      <S.Logo src={Logo2Shared} />
      <S.Description>Desenvolvimento de máquina de crescimento automatizada para o mercado de multipropriedade. Atuando com funil de vendas, marketing e franquias. </S.Description>
      <S.OptionsWrapper>
        <S.Option>Máquina de Vendas</S.Option>
        <S.Option>Marketing Digital</S.Option>
        <S.Option>CRM</S.Option>
        <S.Option>Integrações</S.Option>
        <S.Option>Lead Score</S.Option>
        <S.Option isLink ><a href="https://www.seja2share.com.br" rel="noreferrer" target="_blank">seja2share.com.br</a></S.Option>
      </S.OptionsWrapper>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Portfolio
