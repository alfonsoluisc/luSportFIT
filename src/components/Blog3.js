import React from "react";
import "../Blog3.css";

const Blog3 = () => {
  return (
    <>
      
      <main className="blog-container">
        <h1>La Importancia de la Nutrición en el Deporte</h1>
        <p>
          Una buena nutrición es esencial para cualquier persona activa, ya que proporciona la energía y los nutrientes necesarios para maximizar el rendimiento físico y acelerar la recuperación. Aquí exploramos su importancia:
        </p>
        <section className="blog-section">
          <h2>1. Energía para el Rendimiento</h2>
          <p>
            Consumir carbohidratos complejos antes del ejercicio asegura un suministro constante de energía para entrenamientos de alta intensidad.
          </p>
        </section>
        <section className="blog-section">
          <h2>2. Reparación y Crecimiento Muscular</h2>
          <p>
            Las proteínas son esenciales para reparar tejidos musculares dañados durante el ejercicio y promover el crecimiento.
          </p>
        </section>
        <section className="blog-section">
          <h2>3. Hidratación</h2>
          <p>
            Mantenerse hidratado mejora el rendimiento y previene calambres musculares y fatiga.
          </p>
        </section>
      </main>
      
    </>
  );
};

export default Blog3;
