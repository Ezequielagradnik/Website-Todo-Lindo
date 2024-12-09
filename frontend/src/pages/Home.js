import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Productos de ejemplo
const allProducts = [
  { id: 1, name: 'Cartera Roja', price: 2000, category: 'Accesorios', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Zapatos de Cuero', price: 3500, category: 'Calzado', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Bufanda de Lana', price: 1500, category: 'Ropa', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Camisa Blanca', price: 2500, category: 'Ropa', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Mochila Negra', price: 3000, category: 'Accesorios', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Zapatillas Urbanas', price: 4000, category: 'Calzado', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  const [products, setProducts] = useState(allProducts);

  const filterByCategory = (category) => {
    if (category === 'Todos') {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((product) => product.category === category));
    }
  };

  return (
    <div className="container">
      {/* Sección de Bienvenida */}
      <section className="welcome-section">
        <h1>Bienvenido a Todo Lindo</h1>
        <p>Tu tienda de productos exclusivos y de alta calidad.</p>
      </section>

      {/* Botones de Filtro */}
      <h2>Categorías</h2>
      <div className="button-group">
        <button onClick={() => filterByCategory('Todos')}>Todos</button>
        <button onClick={() => filterByCategory('Ropa')}>Ropa</button>
        <button onClick={() => filterByCategory('Calzado')}>Calzado</button>
        <button onClick={() => filterByCategory('Accesorios')}>Accesorios</button>
      </div>

      {/* Grilla de Productos */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>Ver Detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
