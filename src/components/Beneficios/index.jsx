import React from 'react';
import './Beneficios.css';

const beneficiosData = [
  {
    title: 'Feedback Personalizado para seu Currículo',
    description: 'Receba um feedback personalizado através de WhatsApp ou e-mail utilizando <strong>A.I</strong>. Obtenha uma análise detalhada dos pontos fortes do seu currículo e sugestões de melhorias para atrair a atenção dos recrutadores.',
    imgSrc: './img/cv.svg',
  },
  {
    title: 'Aprimore suas Habilidades',
    description: 'Acesse cursos personalizados para aprimorar suas habilidades e aumentar suas chances de sucesso nas entrevistas de emprego.',
    imgSrc: './img/cv.svg',
  },
  {
    title: 'Conquiste Seu Emprego dos Sonhos',
    description: 'Com nossas dicas e orientações, você estará preparado para conquistar a vaga dos seus sonhos em pouco tempo.',
    imgSrc: './img/cv.svg',
  }
];

const Beneficios = () => {
  return (
    <div className="beneficios-container">
      <h1 className="section-title">Vantagens</h1>
      {beneficiosData.map((beneficio, index) => (
        <div className="vantagens-section" key={index}>
          <div className="image-section">
            <img className="imgCv" src={beneficio.imgSrc} alt="Background" />
          </div>
          <div className="vantagens-content">
            <h1>{beneficio.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: beneficio.description }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beneficios;
