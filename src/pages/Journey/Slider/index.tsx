import React, { useCallback, useState } from 'react';
import * as S from './styles';

import clearAllTimeOuts from '../../../utils/clearAllTimeOuts'

const data = [
  {
    id: 1,
    title: 'Contratos',
    description: 'Somos cautelosos e seguros com as informações dos nossos clientes, nesta etapa assinamos toda documentação necessária para a melhor performance do projeto.',
  },
  {
    id: 2,
    title: 'Overview sobre o projeto',
    description: 'Mergulhamos no seu negócio para entender mais sobre pessoas, processos, vendas, marketing e outros aspectos que impactam no sucesso do seu negócio.',
  },
  {
    id: 3,
    title: 'Onboarding',
    description: 'Queremos conhecer seu time e seus processos mais de perto para construir os melhores insights para o seu negócio.',
  },
  {
    id: 4,
    title: 'Planejamento Estratégico',
    description: 'Mão na massa! Através de metodologias ágeis organizamos todos os nossos objetivos e prazos de execução.',
  },
  {
    id: 5,
    title: 'Execução do projeto',
    description: 'Go! Iniciamos o processo de alta performance junto com você.',
  },
]

const Slider: React.FC = () => {
  const [id, setId] = useState(data[0].id)
  const [title, setTitle] = useState(data[0].title)
  const [description, setDescription] = useState(data[0].description)
  const [descriptionAnimation, setDescriptionAnimation] = useState('in')
  const [subtitleAnimation, setSubtitleAnimation] = useState('in')

  const handleChange = useCallback((toIndex: number) => {
    const item = data.find(d => d.id === toIndex);

    if(!item){
      return;
    }

    clearAllTimeOuts()

    const {id, title, description} = item;

    setDescriptionAnimation('out')
    setSubtitleAnimation('out')

    setId(id)

    setTimeout(() => {
      setTitle(title)
      setSubtitleAnimation('in')
      setTimeout(() => {
        setDescription(description)
        setDescriptionAnimation('in')
      }, 300)
    }, 1000)
  }, [])

  return (
    <S.Wrapper>
      <S.Title>Nossa <br />Jornada</S.Title>

      <S.Subtitle animation={subtitleAnimation}>{title}</S.Subtitle>
  
      <S.Description animation={descriptionAnimation}>{description}</S.Description>
  
      <S.NavigationBar>
        <S.PrevButton onClick={() => handleChange(id-1)} active={id !== 1} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M28.0599 13.437C28.1573 14.0755 28.2061 14.7306 28.2061 15.3845C28.2061 22.4537 22.4548 28.205 15.3855 28.205C8.31631 28.205 2.56503 22.4537 2.56503 15.3845C2.56503 8.31525 8.31631 2.56396 15.3855 2.56396C19.3958 2.56396 23.0996 4.38832 25.5484 7.56653C25.8625 7.97422 25.7855 8.5614 25.3791 8.87422C24.9714 9.18961 24.3868 9.1114 24.0702 8.70499C21.9791 5.98576 18.8125 4.42807 15.3855 4.42807C9.34451 4.42807 4.42913 9.34217 4.42913 15.3845C4.42913 21.4255 9.34451 26.3396 15.3855 26.3396C21.4266 26.3396 26.342 21.4255 26.342 15.3845C26.342 14.8242 26.2996 14.264 26.2163 13.7191C26.1394 13.2114 26.4881 12.7358 26.9971 12.6576C27.5086 12.5729 27.9817 12.9281 28.0599 13.437ZM11.8032 15.3835C11.8032 15.1283 11.9045 14.8835 12.0865 14.7027L16.5558 10.2527C16.9327 9.87706 17.5417 9.87834 17.916 10.2553C18.2904 10.6322 18.2904 11.2399 17.9135 11.6142L14.1276 15.3835L17.9135 19.1527C18.2904 19.5271 18.2904 20.136 17.916 20.513C17.5417 20.8886 16.9327 20.8899 16.5558 20.5155L12.0865 16.0642C11.9045 15.8848 11.8032 15.6399 11.8032 15.3835Z" fill="#4F4F4F" />
        </S.PrevButton>

        {data.map(((item, i) => (
          <S.Circle key={i} active={id === i+1} />
        )))}
  
        <S.NextButton onClick={() => handleChange(id+1)} active={id < data.length} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.71061 17.332C2.61317 16.6935 2.56445 16.0384 2.56445 15.3846C2.56445 8.31533 8.31574 2.56405 15.385 2.56405C22.4542 2.56405 28.2055 8.31533 28.2055 15.3846C28.2055 22.4538 22.4542 28.2051 15.385 28.2051C11.3747 28.2051 7.67086 26.3807 5.22215 23.2025C4.90804 22.7948 4.98497 22.2076 5.39138 21.8948C5.79907 21.5794 6.38368 21.6576 6.70035 22.0641C8.79138 24.7833 11.958 26.341 15.385 26.341C21.426 26.341 26.3414 21.4269 26.3414 15.3846C26.3414 9.34354 21.426 4.42943 15.385 4.42943C9.34394 4.42943 4.42856 9.34354 4.42856 15.3846C4.42856 15.9448 4.47086 16.5051 4.5542 17.0499C4.63112 17.5576 4.2824 18.0333 3.77343 18.1115C3.26189 18.1961 2.78881 17.841 2.71061 17.332ZM18.9673 15.3856C18.9673 15.6408 18.866 15.8856 18.6839 16.0664L14.2147 20.5164C13.8378 20.8921 13.2288 20.8908 12.8545 20.5138C12.4801 20.1369 12.4801 19.5292 12.857 19.1549L16.6429 15.3856L12.857 11.6164C12.4801 11.242 12.4801 10.6331 12.8545 10.2562C13.2288 9.88051 13.8378 9.87923 14.2147 10.2536L18.6839 14.7049C18.866 14.8844 18.9673 15.1292 18.9673 15.3856Z" fill="#4F4F4F" />
        </S.NextButton>
      </S.NavigationBar>
    </S.Wrapper>
  )
}

export default Slider
