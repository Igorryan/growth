import React from 'react';
import * as S from './styles';

const Contact: React.FC = () => (
  <S.Wrapper>
    <S.ContentWrapper>
      <S.Title>Vamos conversar?</S.Title>
      <S.Description>Você também pode nos encontrar nos seguintes canais:<br /><span>Email: contato@growth.sale | Telefone: (xx) xxxx-xxxx</span></S.Description>
      <S.Description></S.Description>

      <S.Form>
        <S.InputsColumns>
          <S.InputWrapper>
            <span>Name*</span>
            <input placeholder="Manda seu nome, ai." type="text"/>
          </S.InputWrapper>

          <S.InputWrapper>
            <span>Sobrenome*</span>
            <input placeholder="Digite seu sobrenome" type="text"/>
          </S.InputWrapper>

          <S.InputWrapper>
            <span>E-mail*</span>
            <input placeholder="Informe seu melhor e-mail" type="text" />
          </S.InputWrapper>

          <S.InputWrapper>
            <span>Empresa*</span>
            <input placeholder="Escreve que a gente alavanca" type="text" />
          </S.InputWrapper>
        </S.InputsColumns>

        <S.InputsColumns>
          <S.InputWrapper>
            <span>Telefone*</span>
            <input placeholder="(00) 9 9999-9999" type="text"/>
          </S.InputWrapper>

          <S.InputWrapper>
            <span>Mensagem*</span>
            <textarea placeholder="Capriche na mensagem..." />
          </S.InputWrapper>

          <S.Button>Envie e voe</S.Button>
        </S.InputsColumns>
      </S.Form>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Contact
