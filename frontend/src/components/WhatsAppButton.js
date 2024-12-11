import React from 'react';
import '../WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491156258137" // Reemplaza con tu número
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      Atención Vía WhatsApp
    </a>
  );
};

export default WhatsAppButton;
