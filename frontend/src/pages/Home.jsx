import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Termo Lumilagro', price: 1000, image: 'catalog_images/termo.png' },
  { id: 2, name: 'Botella Metálica', price: 1200, image: 'catalog_images/botella.png' },
  { id: 3, name: 'Mate de Madera', price: 800, image: 'catalog_images/mate.png' },
  { id: 4, name: 'Sartén de Teflón', price: 1500, image: 'catalog_images/sarten.png' },
];

const Home = () => {
  const [products, setProducts] = useState(allProducts);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filterProducts = () => {
    const filtered = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!maxPrice || p.price <= maxPrice)
    );
    setProducts(filtered);
  };

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div>
      {/* Header */}
      <nav>
        <h1>
          <img src="/catalog_images/logo.png" alt="Logo Todo Lindo" />
          Todo Lindo
        </h1>
        <div className="cart-icon" onClick={() => (window.location.href = '/cart')}>
          <img src="/cart.png" alt="Carrito" />
          <span className="cart-count">{cartCount}</span>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Bienvenido a Todo Lindo</h1>
        <h3>Tu lugar ideal para encontrar productos increíbles</h3>
      </div>

      {/* Main Content */}
      <div className="container main-content">
        {/* Filtro */}
        <div className="filter-section">
          <h3>Filtrar productos</h3>
          <input
            type="number"
            placeholder="Precio máximo"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button onClick={filterProducts}>Aplicar</button>
        </div>

        {/* Productos */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <div className="buttons">
                <button className="add-to-cart" onClick={addToCart}>
                  Agregar al Carrito
                </button>
                <Link to={`/product/${product.id}`}>
                  <button className="details">Detalles</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Todo Lindo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
