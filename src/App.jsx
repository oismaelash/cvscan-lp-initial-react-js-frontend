// src/App.jsx
import React, { useRef } from 'react';
import LandingPage from './components/LandingPage';
import ResponsiveIframe from './components/ResponsiveIframe';
import Beneficios from './components/Beneficios';
import Footer from './components/Footer';

const App = () => {
  const iframeRef = useRef(null);

  const scrollToIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <LandingPage onScrollToIframe={scrollToIframe} />
      <Beneficios />
      <div>
        <ResponsiveIframe src="https://cv.minhaentrevista.com.br/" ref={iframeRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
