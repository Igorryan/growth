import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Routes from './routes';
import NavigationMenu from './components/NavigationMenu';

const App: React.FC = () => (
  <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <NavigationMenu />
  </BrowserRouter>)

export default App;
