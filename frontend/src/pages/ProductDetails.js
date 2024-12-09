import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const navigate = useNavigate();

  // Catálogo de productos con imágenes reales
  const products = [
    {
      id: 1,
      name: 'Termo Lumilagro',
      price: 2500,
      description: 'Termo jarra térmica de vidrio de 1L con tapón a rosca.',
      image: '/catalog_images/product_1_1.jpeg',
    },
    {
      id: 2,
      name: 'Botella Metálica',
      price: 1800,
      description: 'Botella metálica de 500ml con gancho para colgar.',
      image: '/catalog_images/product_1_2.jpeg',
    },
    {
      id: 3,
      name: 'Mate Autocebante',
      price: 3500,
      description: 'Termo mate autocebante con válvula de retención y bombilla de metal.',
      image: '/catalog_images/product_1_3.jpeg',
    },
    {
      id: 4,
      name: 'Sartén de Teflón',
      price: 2200,
      description: 'Sartén antiadherente Nro 24 con capacidad de 1.8L.',
      image: '/catalog_images/product_1_4.png',
    },
    {
      id: 5,
      name: 'Paellera de Teflón',
      price: 4000,
      description: 'Paellera antiadherente de 36cm con capacidad para 4.6L.',
      image: '/catalog_images/product_1_5.png',
    },
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
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductDetails;
