import React from 'react';

const offers = [
  { id: 1, name: 'Termo en Oferta', price: 800, description: 'Descuento especial del 20%.' },
  { id: 2, name: 'Mate en Oferta', price: 500, description: 'Precio rebajado por tiempo limitado.' },
  {id:3, name: 'Espadas 2x1', price:500, description:'¡2X1!'}

];

const Offers = () => {
  return (
    <div className="container">
      <h2>Ofertas Especiales</h2>
      <div className="product-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="product-card">
            <h3>{offer.name}</h3>
            <p>Precio: ${offer.price}</p>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
