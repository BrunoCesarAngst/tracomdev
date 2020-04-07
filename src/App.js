import React from 'react';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
