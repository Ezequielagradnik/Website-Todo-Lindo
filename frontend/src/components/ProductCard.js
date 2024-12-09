import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="card">
    <h3>{product.name}</h3>
    <p>Precio: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
  </div>
);

export default ProductCard;
