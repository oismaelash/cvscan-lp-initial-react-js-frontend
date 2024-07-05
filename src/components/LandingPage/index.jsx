// src/components/LandingPage/LandingPage.jsx
import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onScrollToIframe }) => {
  return (
    <div className="landing-container">
      <div className="image-section">
        <img className="imgCv" src="./img/cv.svg" alt="Background" />
      </div>
      <div className="content-section">
        <h1>Melhore Seu Currículo</h1>
        <p>
          Utilize <strong>A.I</strong> e tenha RH aos seus pés <br /> <br />
          Receba no seu WhatsApp ou e-mail uma análise detalhada dos pontos positivos do seu currículo e sugestões de melhorias, para deixá-lo <strong>100% atrativo</strong> para os recrutadores.
        </p>
        <button onClick={onScrollToIframe}>Quero melhorar meu CV agora!</button>
      </div>
    </div>
  );
};

export default LandingPage;
