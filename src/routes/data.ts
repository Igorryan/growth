import BackgroundHome from '../assets/img/background-1.png'
import BackgroundCorporate from '../assets/img/background-corporate.png';
import BackgroundJourney from '../assets/img/background-journey.png';
import BackgroundPortfolio from '../assets/img/background-portfolio.png';

const data = [
  {
    id: 1,
    route: '/',
    name: 'O que a Growth faz?',
    background: BackgroundHome
  },
  {
    id: 2,
    route: '/journey',
    name: 'Nossa jornada',
    background: BackgroundJourney
  },
  {
    id: 3,
    route: '/how-we-do',
    name: 'Como fazemos?',
    background: BackgroundCorporate
  },
  {
    id: 4,
    route: '/executives',
    name: 'Executivos',
  },
  {
    id: 5,
    route: '/portfolio',
    name: 'Portfólio',
    background: BackgroundPortfolio
  },
  {
    id: 6,
    route: '/contact',
    name: 'Contato',
  },
]

export default data;