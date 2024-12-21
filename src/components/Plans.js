import React from 'react';
import '../Plans.css';

const PlanCard = ({ title, description, features, cost, className, image }) => {
  return (
    <div className={`plan ${className}`}>
      {/* Imagen */}
      <img src={image} alt={title} className="plan-image" />

      {/* Precio */}
      <div className="price">{cost}</div>

      {/* Descripción */}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const Plans = () => {
  const plansData = [
    {
      title: 'Plan Avanzado',
      description: 'Dirigido a quienes buscan maximizar su rendimiento físico y alcanzar metas ambiciosas.',
      features: [
        '6 sesiones semanales de 1 hora y media.',
        'Entrenamiento de alto rendimiento con técnicas avanzadas.',
        'Plan de alimentación personalizado y revisión quincenal.',
        'Acceso exclusivo a contenido premium y herramientas digitales.',
        'Soporte personalizado 24/7.',
      ],
      cost: '$597.000 COP/mes',
      className: 'advanced-plan',
      image: '/images/premium.jpg',
    },
        {
      title: 'Plan Intermedio',
      description: 'Perfecto para quienes buscan resultados visibles y una rutina más completa.',
      features: [
        '5 sesiones semanales de 1 hora.',
        'Rutinas personalizadas adaptadas a tus metas.',
        'Plan de alimentación diseñado por nuestros expertos.',
        'Asesoramiento constante con seguimiento mensual.',
      ],
      cost: '$497.000 COP/mes',
      className: 'intermediate-plan',
      image: '/images/estandar.jpg',
    },
    {
      title: 'Plan Básico',
      description: 'Ideal para quienes están comenzando o desean mantener una rutina ligera.',
      features: [
        '3 sesiones semanales de 1 hora.',
        'Asesoramiento básico sobre rutinas de ejercicios.',
        'Recomendaciones generales de nutrición.',
        'Acceso a sesiones grupales.',
      ],
      cost: '$397.000 COP/mes',
      className: 'basic-plan',
      image: '/images/basico.jpg',
    },

  ];

  return (
    <section className="plans-section">
      <h2 className="plans-title">Nuestros Planes</h2>
      {plansData.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          description={plan.description}
          features={plan.features}
          cost={plan.cost}
          className={plan.className}
          image={plan.image} // Asegúrate de pasar la propiedad image
        />
      ))}
      <section className="policies-section">
        <h2 className="policies-title">Términos y Condiciones</h2>
        <ul>
          <li>Los planes son personales e intransferibles. No pueden ser compartidos ni cedidos a terceros.</li>
          <li>El cliente debe cumplir con las indicaciones del entrenador para garantizar la efectividad del programa.</li>
          <li>Los pagos de los planes son no reembolsables, excepto en casos específicos previamente acordados.</li>
          <li>Es responsabilidad del cliente proporcionar información veraz y actualizada sobre su estado de salud.</li>
          <li>Lu Sport FIT no se hace responsable por lesiones o inconvenientes derivados del incumplimiento de las instrucciones brindadas.</li>
          <li>Cualquier modificación o cancelación de los planes debe ser solicitada con al menos 48 horas de antelación.</li>
          <li>Nos reservamos el derecho de actualizar los términos y condiciones sin previo aviso.</li>
        </ul>
      </section>
    </section>
  );
};

export default Plans;
