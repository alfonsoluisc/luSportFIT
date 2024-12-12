import React, { useState } from "react";
import "../Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: Correos deben coincidir
    if (email !== confirmEmail) {
      setError("Los correos electrónicos no coinciden.");
      setSuccess(false);
      return;
    }

    // Validación: Teléfono debe tener exactamente 10 dígitos
    if (phone.length !== 10) {
      setError("El número de teléfono debe contener 10 dígitos.");
      setSuccess(false);
      return;
    }

    // Si todas las validaciones pasan
    setError("");
    setSuccess(true);

    // Limpia los campos del formulario
    setEmail("");
    setConfirmEmail("");
    setPhone("");
    setMessage("");

    // Enviar el formulario
    e.target.submit();
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctanos</h2>
      <form
        className="contact-form"
        action="https://formsubmit.co/luramirezfit@gmail.com"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
      >
        {/* Campo Nombre */}
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </div>

        {/* Campo Correo */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Campo Confirmación de Correo */}
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar Correo Electrónico:</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="Confirma tu correo"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </div>

        {/* Campo Teléfono */}
        <div className="form-group">
          <label htmlFor="phone">Número de Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Tu número de teléfono"
            value={phone}
            onChange={(e) => {
              if (/^\d{0,10}$/.test(e.target.value)) setPhone(e.target.value);
            }}
            required
          />
        </div>

        {/* Campo Mensaje */}
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tu mensaje aquí"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Mensajes de error o éxito */}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Formulario enviado con éxito.</p>}

        {/* Botón de Enviar */}
        <button type="submit" className="submit-button">
          Enviar
        </button>

        {/* Configuración de FormSubmit */}
        <input type="hidden" name="_next" value="https://lusportfit.com" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </section>
  );
};

export default Contact;
