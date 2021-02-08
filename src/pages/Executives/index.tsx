import React from 'react';
import * as S from './styles';

import SergioProfile from '../../assets/img/executives/sergio.png'
import WellaineProfile from '../../assets/img/executives/wesllaine.png'
import LuizProfile from '../../assets/img/executives/luiz.png'
import MuriloProfile from '../../assets/img/executives/murilo.png'
import MatheusProfile from '../../assets/img/executives/matheus.png'
import LeandroProfile from '../../assets/img/executives/leandro.png'

const data = [
  {
    image: SergioProfile,
    name: 'Sérgio Estevam',
    occupation: 'Founder & CEO',
    linkedin: 'sergio'
  },
  {
    image: WellaineProfile,
    name: 'Wesllaine Castro',
    occupation: 'Co - Founder & CKO',
    linkedin: ''
  },
  {
    image: LuizProfile,
    name: 'Luiz M. Couto',
    occupation: 'CTO',
    linkedin: ''
  },
  {
    image: MuriloProfile,
    name: 'Murilo Ravani',
    occupation: 'CPO',
    linkedin: ''
  },
  {
    image: MatheusProfile,
    name: 'Matheus Barcelos',
    occupation: 'Advogado',
    linkedin: ''
  },
  {
    image: LeandroProfile,
    name: 'Leandro Almeida',
    occupation: 'COO',
    linkedin: ''
  }
]

const Executives: React.FC = () => (
  <S.Wrapper>
    <S.ContentWrapper>
      <S.Title>Executivos</S.Title>
      <S.ExecutivesWrapper>
        {data.map(({ image, name, occupation, linkedin }) => (
          <S.Executive key={name}>
            <S.ProfileImage src={image} alt={name} />
            <S.Name>{name}</S.Name>
            <S.Ocuppation>{occupation}</S.Ocuppation>
            <S.LinkWrapper>
              <S.LinkedinIcon width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.8364 0H2.16362C0.968628 0 0 0.968628 0 2.16362V27.8364C0 29.0314 0.968628 30 2.16362 30H27.8364C29.0314 30 30 29.0314 30 27.8364V2.16362C30 0.968628 29.0314 0 27.8364 0V0ZM10.6412 22.6758H6.98799V11.6851H10.6412V22.6758ZM8.8147 10.1843H8.79089C7.565 10.1843 6.77216 9.34044 6.77216 8.28575C6.77216 7.20726 7.58926 6.38672 8.83896 6.38672C10.0887 6.38672 10.8577 7.20726 10.8815 8.28575C10.8815 9.34044 10.0887 10.1843 8.8147 10.1843ZM23.8138 22.6758H20.1611V16.796C20.1611 15.3184 19.6321 14.3106 18.3103 14.3106C17.3012 14.3106 16.7001 14.9904 16.436 15.6466C16.3394 15.8814 16.3158 16.2096 16.3158 16.5381V22.6758H12.6629C12.6629 22.6758 12.7107 12.7162 12.6629 11.6851H16.3158V13.2413C16.8013 12.4924 17.6699 11.4272 19.6081 11.4272C22.0116 11.4272 23.8138 12.998 23.8138 16.3737V22.6758Z" fill="#fff" />
              </S.LinkedinIcon>
              <S.Link target="_blank" href={`https://www.linkedin.com/in/${linkedin}`}>Linkedin</S.Link>
            </S.LinkWrapper>
          </S.Executive>
        ))}
      </S.ExecutivesWrapper>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Executives
