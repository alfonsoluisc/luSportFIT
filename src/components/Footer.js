import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Importa los íconos de redes sociales
import '../Footer.css'; // Asegúrate de tener estilos para la sección

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <h4>Redes Sociales</h4>
        <div className="icons">
          <a href="https://www.facebook.com/share/1Apa1ZksfN/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
          </a>
          <a href="hhttps://www.instagram.com/lu_ramirezfit/profilecard/?igsh=MTdyMmdnMWg2dnE1bQ==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
          </a>
          <a href="https://www.tiktok.com/@lufe.ramirez" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="icon tiktok" />
          </a>
          <a href="https://www.youtube.com/@LuRamirezFit" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
          </a>
        </div>
      </div>
      <p>© 2024 Lu Sport FIT. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
