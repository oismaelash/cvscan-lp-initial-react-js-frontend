import React, { useRef } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import ResponsiveIframe from './components/ResponsiveIframe';
import Beneficios from './components/Beneficios';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const iframeRef = useRef(null);

  const scrollToIframe = () => {
    console.log('scrollToIframe called');
    if (iframeRef.current) {
      console.log('iframeRef current:', iframeRef.current);
      iframeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('iframeRef is null');
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
