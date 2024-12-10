import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('Tarjeta');
  const [deliveryMethod, setDeliveryMethod] = useState('Andreani');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleCardInput = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleCheckout = () => {
    if (paymentMethod === 'Tarjeta') {
      console.log('Detalles de la tarjeta:', cardDetails);
    }

    const checkoutData = {
      paymentMethod,
      deliveryMethod,
    };

    console.log('Datos del checkout:', checkoutData);
    alert('Procesando el pago y envío...');
  };

  const handleMercadoPago = () => {
    window.location.href = 'http://localhost:4000/api/mercado-pago'; // Redirección a la ruta de Mercado Pago
  };

  return (
    <div className="container">
      <h2>Checkout</h2>

      {/* Método de Pago */}
      <div className="checkout-section">
        <h3>¿Cómo deseas pagar?</h3>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Tarjeta">Tarjeta de Crédito/Débito</option>
          <option value="MercadoPago">Mercado Pago</option>
        </select>

        {/* Formulario para Tarjeta */}
        {paymentMethod === 'Tarjeta' && (
          <div className="card-form">
            <h3>Detalles de la Tarjeta</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de Tarjeta"
              value={cardDetails.cardNumber}
              onChange={handleCardInput}
              maxLength="16"
            />
            <input
              type="text"
              name="cardName"
              placeholder="Nombre en la Tarjeta"
              value={cardDetails.cardName}
              onChange={handleCardInput}
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={cardDetails.expiryDate}
              onChange={handleCardInput}
              maxLength="5"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardInput}
              maxLength="3"
            />
          </div>
        )}

        {/* Botón para Mercado Pago */}
        {paymentMethod === 'MercadoPago' && (
          <button onClick={handleMercadoPago} className="mercado-pago-button">
            Pagar con Mercado Pago
          </button>
        )}
      </div>

      {/* Método de Envío */}
      <div className="checkout-section">
        <h3>¿Cómo deseas recibir tu pedido?</h3>
        <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
          <option value="Andreani">Andreani</option>
          <option value="Correo Argentino">Correo Argentino</option>
          <option value="Retiro">Retirar en Local (Belgrano 3255)</option>
        </select>
      </div>

      <button onClick={handleCheckout}>Confirmar Pedido</button>
    </div>
  );
};

export default Checkout;
