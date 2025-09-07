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
        <br />
        <p>
          Utilize <strong>Inteligência Artificial</strong> e tenha <strong>RH aos seus pés</strong> <br /><br />
          {/* Feedback Especializado por <strong>Inteligência Artificial</strong> <br /> <br /> */}
          Receba direto no seu WhatsApp uma análise detalhada dos pontos positivos do seu currículo e sugestões de melhorias, para deixá-lo 100% atrativo para os recrutadores.
        </p>
        <br />
        <button onClick={() => {
          console.log('Button clicked');
          onScrollToIframe();
        }}>Quero Meu Feedback de CV Agora!</button>
      </div>
    </div>
  );
};

export default LandingPage;
