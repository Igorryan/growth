import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Routes from './routes';
import NavigationMenu from './components/NavigationMenu';
import Background from './components/Background';
import AppProvider from './hooks';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <AppProvider>
        <Background />
        <GlobalStyle />
        <Routes />
        <NavigationMenu />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
