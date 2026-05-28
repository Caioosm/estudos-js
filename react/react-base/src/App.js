import React from 'react';

import Login from './pages/login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
