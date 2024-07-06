import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
      MinhaEntrevista &copy; {new Date().getFullYear()} Todos os direitos reservados. Criado por{' '}
        <a href="https://mabelsoft.com.br" target="_blank" rel="noopener noreferrer">
          Mabelsoft
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
