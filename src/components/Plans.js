import React from 'react';
import '../Plans.css';

const Plans = () => {
  return (
    <section className="plans-section">
      <h2 className="plans-title">Nuestros Planes</h2>

    {/* Plan Avanzado */}
    <div className="plan advanced-plan">
        <h3>Plan Avanzado</h3>
        <p>Dirigido a quienes buscan maximizar su rendimiento físico y alcanzar metas ambiciosas.</p>
        <ul>
          <li>6 sesiones semanales de 1 hora y media.</li>
          <li>Entrenamiento de alto rendimiento con técnicas avanzadas.</li>
          <li>Plan de alimentación personalizado y revisión quincenal.</li>
          <li>Acceso exclusivo a contenido premium y herramientas digitales.</li>
          <li>Soporte personalizado 24/7.</li>
        </ul>
        <p><strong>Costo:</strong> $587.000 COP al mes.</p>
      </div>
      {/* Plan Básico */}
      <div className="plan basic-plan">
        <h3>Plan Básico</h3>
        <p>Ideal para quienes están comenzando o desean mantener una rutina ligera.</p>
        <ul>
          <li>3 sesiones semanales de 1 hora.</li>
          <li>Asesoramiento básico sobre rutinas de ejercicios.</li>
          <li>Recomendaciones generales de nutrición.</li>
          <li>Acceso a sesiones grupales.</li>
        </ul>
        <p><strong>Costo:</strong> $100.000 COP al mes.</p>
      </div>

      {/* Plan Intermedio */}
      <div className="plan intermediate-plan">
        <h3>Plan Intermedio</h3>
        <p>Perfecto para quienes buscan resultados visibles y una rutina más completa.</p>
        <ul>
          <li>5 sesiones semanales de 1 hora.</li>
          <li>Rutinas personalizadas adaptadas a tus metas.</li>
          <li>Plan de alimentación diseñado por nuestros expertos.</li>
          <li>Asesoramiento constante con seguimiento mensual.</li>
        </ul>
        <p><strong>Costo:</strong> $200.000 COP al mes.</p>
      </div>

      

      {/* Términos y Condiciones */}
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
