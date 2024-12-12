import React from 'react';
import { Link } from 'react-router-dom';
import '../Welcome.css'; 

const Welcome = () => {
  return (
    <>
      {/* Sección de bienvenida con banner */}
      <main id="welcome" className="bienvenida">
        
        <h1>Bienvenidos</h1>
        <p>
          TRABAJAREMOS JUNTOS COMO UN EQUIPO PARA ALCANZAR TUS METAS FÍSICAS,
          SUPERANDO TUS LÍMITES Y LOGRANDO RESULTADOS QUE TRANSFORMEN TU
          BIENESTAR.
        </p>
      </main>

      {/* Sección de testimonios con imagen */}
      <section id="testimonials">
        <h2>Testimonios de Nuestros Clientes</h2>
        <img
          src="/images/banner-testimonials.jpg"
          alt="Clientes felices"
          className="banner image-container"
        />
        <ul>
          <li>
            "Excelente programa de entrenamiento, he visto grandes resultados."
            - Juan Felipe Larton
          </li>
          <li>
            "La nutrición y las rutinas personalizadas cambiaron mi vida." -
            Rosa María
          </li>
          <li>
            "Profesionales y comprometidos con cada persona." - Álvaro Escalante
          </li>
        </ul>
      </section>

      {/* Sección de estadísticas con imagen */}
      <section id="statistics">
        <h2>Resultados de Lu Sport Fit</h2>
        <img
          src="/images/banner-statistics.jpg"
          alt="Resultados impresionantes"
          className="banner image-container"
        />
        <div className="stats">
          <div>
            <p className="stat-number">500+</p>
            <p>Clientes Satisfechos</p>
          </div>
          <div>
            <p className="stat-number">2000+</p>
            <p>Horas de Entrenamiento</p>
          </div>
          <div>
            <p className="stat-number">350+</p>
            <p>Transformaciones Logradas</p>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section id="cta">
        <h2>¿Estás listo para empezar?</h2>
        <p>Únete hoy mismo y da el primer paso hacia una vida más saludable.</p>
        <Link to="/Plans" className="cta-button">
          Ver Planes
        </Link>
      </section>
    </>
  );
};

export default Welcome;
