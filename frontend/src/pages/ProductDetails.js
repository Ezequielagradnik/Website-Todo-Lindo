import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const navigate = useNavigate();

  // Ejemplos de productos para demostración
  const products = [
    { id: 1, name: 'Cartera Roja', price: 2000, description: 'Cartera de cuero roja, elegante y moderna.' },
    { id: 2, name: 'Zapatos de Cuero', price: 3500, description: 'Zapatos de cuero marrón, alta calidad.' },
    { id: 3, name: 'Bufanda de Lana', price: 1500, description: 'Bufanda de lana suave para el invierno.' },
    { id: 4, name: 'Camisa Blanca', price: 2500, description: 'Camisa formal blanca de algodón puro.' },
  ];

  // Buscar el producto seleccionado por ID
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleAddToCart = () => {
    alert(`${product.name} agregado al carrito.`);
    navigate('/cart'); // Redirige al carrito
  };

  return (
    <div className="container">
      <h2>Detalles del Producto</h2>
      <div className="card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductDetails;
