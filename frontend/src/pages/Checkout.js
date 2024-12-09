import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('Mercado Pago');
  const [deliveryMethod, setDeliveryMethod] = useState('Andreani');

  const handleSubmit = () => {
    alert(`Pago con ${paymentMethod}, Entrega por ${deliveryMethod}`);
  };

  return (
    <div className="container">
      <h2>Checkout</h2>

      <h3>¿Cómo deseas pagar?</h3>
      <select onChange={(e) => setPaymentMethod(e.target.value)}>
        <option>Mercado Pago</option>
        <option>Tarjeta de Crédito</option>
        <option>Tarjeta de Débito</option>
      </select>

      <h3>¿Cómo deseas recibir tu pedido?</h3>
      <select onChange={(e) => setDeliveryMethod(e.target.value)}>
        <option>Andreani</option>
        <option>Correo Argentino</option>
        <option>Retirar en Local (Belgrano 3255)</option>
      </select>

      <button onClick={handleSubmit}>Confirmar Pedido</button>
    </div>
  );
};

export default Checkout;
