import React, { useEffect, useRef } from 'react';
import './Beneficios.css';

const beneficiosData = [
  {
    title: 'Análise Completa do Seu CV',
    description: 'Garanta que seu currículo se destaque entre os melhores!',
    imgSrc: './img/1.png',
  },
  {
    title: 'Feedback Personalizado com IA',
    description: 'Nosso serviço de análise de CV, alimentado por Inteligência Artificial, identifica os pontos fortes e as áreas de melhoria específicas para a posição desejada na área de tecnologia.',
    imgSrc: './img/2.png',
  },
  {
    title: 'Economize Tempo e Evite Frustrações',
    description: 'Com nossas dicas e orientações, você estará preparado para conquistar a vaga dos seus sonhos em pouco tempo.',
    imgSrc: './img/4.png',
  },
  {
    title: 'Aumente Suas Chances com Recrutadores',
    description: 'Com nossa ajuda, você estará um passo à frente dos concorrentes, economizando tempo e maximizando suas chances com os recrutadores.',
    imgSrc: './img/3.png',
  }
];

const Beneficios = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="beneficios-container">
      <h1 className="section-title">Vantagens</h1>
      {beneficiosData.map((beneficio, index) => (
        <div
          className={`vantagens-section ${index % 2 === 0 ? 'left' : 'right'}`}
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <div className="image-section">
            <img className="imgCv" src={beneficio.imgSrc} alt={beneficio.title} />
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
