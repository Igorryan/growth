import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import * as S from './styles';

import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors';

const initialFormData = Object.freeze({
  nome: "",
  sobrenome: "",
  email: "",
  empresa: "",
  telefone: "",
  mensagem: "",
})

interface FormErrors {
  nome?: string;
  sobrenome?: string;
  email?: string;
  empresa?: string;
  telefone?: string;
  mensagem?: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, updateFormData] = useState(initialFormData);
  const [formErrors, updateFormErrors] = useState<FormErrors>({})

  const handleSubmit = useCallback(async (e) => {
    try{
      e.preventDefault()
    
      const schema = Yup.object().shape({
        nome: Yup.string().required(),
        sobrenome: Yup.string().required(),
        email: Yup.string().email().required(),
        empresa: Yup.string().required(),
        telefone: Yup.string().required(),
        mensagem: Yup.string().required(),
      })
  
      await schema.validate(formData, {
        abortEarly: false
      });

      updateFormErrors({})
  
      //Enviar e-mail
    }catch(err){
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        updateFormErrors(errors)
        const refElement = document.getElementsByName(Object.keys(errors)[0]);
        refElement[0].focus()
        return;
      }
    }

  }, [formData])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>Vamos conversar?</S.Title>
        <S.Description>Você também pode nos encontrar nos seguintes canais:</S.Description>
        <S.Description style={{marginTop: 20}}><span>Email: contato@growth.sale <br/> Telefone: +55 27 99691-3309</span></S.Description>
  
        <S.Form ref={formRef} action="" onSubmit={handleSubmit}>
          <S.InputsColumns>
            <S.InputWrapper error={!!formErrors.nome}>
              <span>Name*</span>
              <S.Input name="nome" onChange={handleChange}  placeholder="Manda seu nome, ai." type="text"/>
            </S.InputWrapper>
  
            <S.InputWrapper error={!!formErrors.sobrenome}>
              <span>Sobrenome*</span>
              <S.Input name="sobrenome" onChange={handleChange} placeholder="Digite seu sobrenome" type="text"/>
            </S.InputWrapper>
  
            <S.InputWrapper error={!!formErrors.email}>
              <span>E-mail*</span>
              <S.Input name="email" onChange={handleChange} placeholder="Informe seu melhor e-mail" type="text" />
            </S.InputWrapper>
  
            <S.InputWrapper error={!!formErrors.empresa}>
              <span>Empresa*</span>
              <S.Input name="empresa" onChange={handleChange} placeholder="Escreve que a gente alavanca" type="text" />
            </S.InputWrapper>
          </S.InputsColumns>
  
          <S.InputsColumns>
            <S.InputWrapper error={!!formErrors.telefone}>
              <span>Telefone*</span>
              <S.Input name="telefone" onChange={handleChange} placeholder="(00) 9 9999-9999" type="text"/>
            </S.InputWrapper>
  
            <S.InputWrapper error={!!formErrors.mensagem}>
              <span>Mensagem*</span>
              <S.Textarea name="mensagem" onChange={handleChange} placeholder="Capriche na mensagem..." />
            </S.InputWrapper>
  
            <S.Button>Envie e voe</S.Button>
          </S.InputsColumns>
        </S.Form>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Contact
