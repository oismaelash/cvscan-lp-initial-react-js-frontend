import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onScrollToIframe }) => {
  return (
    <div className="landing-container">
      <div className="image-section">
        <img className="imgCv" src="./img/cv.svg" alt="Background" />
      </div>
      <div className="content-section">
        <h1>Turbine Seu Currículo para Vagas em Tecnologia</h1>
        <p>
          Feedback Especializado por <strong>Inteligência Artificial</strong> <br /> <br />
          Receba no seu WhatsApp ou e-mail uma análise detalhada dos pontos positivos do seu currículo e sugestões de melhorias, para deixá-lo 100% atrativo para os recrutadores.
        </p>
        <button onClick={onScrollToIframe}>Quero Meu Feedback de CV Agora!</button>
      </div>
    </div>
  );
};

export default LandingPage;
