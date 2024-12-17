import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const allProducts = [
  { id: 1, name: 'Termo Lumilagro', description: 'Termo jarra térmica de vidrio de 1L con tapón a rosca.', category: 'Termos', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Botella Metálica', description: 'Botella metálica de 500ml con gancho para colgar.', category: 'Botellas', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Mate Autocebante', description: 'Termo mate autocebante con válvula de retención y bombilla de metal.', category: 'Mates', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Sartén de Teflón', description: 'Sartén antiadherente Nro 24 con capacidad de 1.8L.', category: 'Cocina', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Paellera de Teflón', description: 'Paellera antiadherente de 36cm con capacidad para 4.6L.', category: 'Cocina', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Mate de Madera', description: 'Mate de madera pintado a mano, ideal para regalo.', category: 'Mates', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Vaso Térmico', description: 'Vaso térmico de acero inoxidable con tapa antiderrame, 380ml.', category: 'Termos', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Wok de Teflón', description: 'Wok antiadherente de 28cm con capacidad para 4.3L.', category: 'Cocina', image: 'https://via.placeholder.com/150' },
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
        <p>Tu bazar y jugueteria de confianza.</p>
      </section>

      {/* Botones de Filtro */}
      <h2>Categorías</h2>
      <div className="button-group">
        <button onClick={() => filterByCategory('Todos')}>Todos</button>
        <button onClick={() => filterByCategory('Cocina')}>Cocina</button>
        <button onClick={() => filterByCategory('Termos')}>Termos</button>
        <button onClick={() => filterByCategory('Mates')}>Mates</button>
        <button onClick={() => filterByCategory('Botellas')}>Botellas</button>
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
