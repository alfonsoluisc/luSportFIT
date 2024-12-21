import React from "react";
import "../WhatsAppButton.css"; // Archivo CSS para estilos

const WhatsAppButton = () => {
  const phoneNumber = "+573214543266"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría obtener más información de los entrenamientos personalizados.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
