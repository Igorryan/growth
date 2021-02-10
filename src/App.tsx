import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Routes from './routes';
import NavigationMenu from './components/NavigationMenu';
import BackgroundImage from './components/BackgroundImage';

const App: React.FC = () => (
  <BrowserRouter>
    <BackgroundImage>
      <GlobalStyle />
      <Routes />
      <NavigationMenu />
    </BackgroundImage>
  </BrowserRouter>)

export default App;
