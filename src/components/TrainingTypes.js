import React from "react";
import "../TrainingTypes.css";

const TrainingTypes = () => {
  const trainingTypes = [
    { id: 1, name: "Aeróbico", description: "También conocido como de resistencia o cardiovascular, este tipo de entrenamiento involucra los músculos más grandes del cuerpo con movimientos repetitivos y rítmicos.", image: "/images/aerobico.jpg" },
    { id: 2, name: "Entrenamiento de Fuerza", description: "También conocido como anaeróbico, este tipo de entrenamiento se realiza con pesas, como mancuernas, kettlebells o pelotas medicinales, y ayuda a tonificar y regenerar los músculos.", image: "/images/fuerza.jpg" },
    { id: 3, name: "De Flexibilidad", description: "Estiramiento o de amplitud de movimiento, este tipo de entrenamiento ayuda a mejorar la elasticidad de los músculos y la amplitud de movimiento de las articulaciones.", image: "/images/flexibilidad.jpg" },
    { id: 4, name: "De Velocidad", description: "Este tipo de entrenamiento ayuda a desarrollar la capacidad del cuerpo para generar respuestas explosivas, como saltar, tirar un golpe o levantarse más rápido.", image: "/images/velocidad.jpg" },
    { id: 5, name: "De Potencia", description: "Combina fuerza y velocidad, y ayuda a desarrollar la capacidad de los músculos para generar fuerza de forma rápida. Algunos ejemplos son el boxeo o el atletismo.", image: "/images/potencia.jpg" },
    { id: 6, name: "HIIT", description: "Este tipo de entrenamiento combina ejercicios de alta intensidad en intervalos cortos de tiempo.", image: "/images/hiit.jpg" },
    { id: 7, name: "Funcional", description: "Este tipo de entrenamiento, como el crossfit, ayuda a potenciar la agilidad y la fuerza.", image: "/images/funcional.jpg" },
  ];

  return (
    <section id="training" className="training-types">
      <h2>Tipos de Entrenamiento</h2>
      <div className="cards-container">
        {trainingTypes.map((type) => (
          <div key={type.id} className="card">
            <img src={type.image} alt={type.name} className="card-image" />
            <div className="card-content">
              <h3>{type.name}</h3>
              <p>{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingTypes;
