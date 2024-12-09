import React from 'react';

const Help = () => (
  <div className="container">
    <h2>Preguntas Frecuentes</h2>
    <div className="card">
      <h3>¿Cómo puedo pagar?</h3>
      <p>Puedes pagar con Mercado Pago, tarjeta de crédito o débito.</p>
    </div>
    <div className="card">
      <h3>¿Dónde se encuentra el local?</h3>
      <p>Nos encontramos en Belgrano 3255.</p>
    </div>
    <h3>¿Tienes más preguntas?</h3>
    <a href="https://wa.me/5491156258137" target="_blank" rel="noopener noreferrer">
      Escríbenos por WhatsApp
    </a>
  </div>
);

export default Help;
