// src/App.jsx
import React from 'react';
import LandingPage from './components/LandingPage';
import ResponsiveIframe from './components/ResponsiveIframe';
import Beneficios from './components/Beneficios';

const App = () => {
  return (
    <div>
      <LandingPage />
      <Beneficios />
      <div>
      <h1>Meu Typebot</h1>
      <ResponsiveIframe src="https://cv.minhaentrevista.com.br/" />
    </div>
    </div>
  );
};

export default App;
