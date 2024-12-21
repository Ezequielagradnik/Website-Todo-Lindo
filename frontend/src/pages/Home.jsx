import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock Data for Products
const allProducts = [
  { id: 1, name: 'Termo Lumilagro', price: 1000, image: 'catalog_images/termo.png' },
  { id: 2, name: 'Botella Metálica', price: 1200, image: 'catalog_images/botella.png' },
  { id: 3, name: 'Mate de Madera', price: 800, image: 'catalog_images/mate.png' },
  { id: 4, name: 'Sartén de Teflón', price: 1500, image: 'catalog_images/sarten.png' },
];

// Main Component
const Home = () => {
  const [products, setProducts] = useState(allProducts);
  const [cartCount, setCartCount] = useState(0);
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');

  const filterProducts = () => {
    const filtered = allProducts.filter(
      (p) =>
        (!maxPrice || p.price <= maxPrice) &&
        (!category || category === 'Todos' || p.category === category)
    );
    setProducts(filtered);
  };

  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div className="main-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Bienvenido a Todo Lindo</h1>
      </div>

      <div className="content">
        {/* Left Filter Component */}
        <FilterComponent
          setMaxPrice={setMaxPrice}
          setCategory={setCategory}
          filterProducts={filterProducts}
        />

        {/* Product Grid */}
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

      {/* Right Floating Cart Icon */}
      <CartIcon cartCount={cartCount} />
    </div>
  );
};

// Filter Component
const FilterComponent = ({ setMaxPrice, setCategory, filterProducts }) => (
  <div className="filter-section">
    <h3>Filtrar productos</h3>
    <input
      type="number"
      placeholder="Precio máximo"
      onChange={(e) => setMaxPrice(e.target.value)}
    />
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="">Todos</option>
      <option value="Cocina">Cocina</option>
      <option value="Termos">Termos</option>
      <option value="Mates">Mates</option>
      <option value="Botellas">Botellas</option>
    </select>
    <button onClick={filterProducts}>Aplicar</button>
  </div>
);

// Cart Icon Component
const CartIcon = ({ cartCount }) => (
  <div className="cart-icon" onClick={() => (window.location.href = '/cart')}>
    <img src="catalog_images/cart-icon.png" alt="Carrito" />
    <span className="cart-count">{cartCount}</span>
  </div>
);

export default Home;
