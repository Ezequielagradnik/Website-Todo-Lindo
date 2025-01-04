import React from 'react';
import '../../novedades.css';

const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <div className="product-image">
          {/* Product image will go here HIJO DE PUTA*/}
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">${product.price}</span>
            <button className="filter-button">Ver más</button>
          </div>
        </div>
      </div>
    );
  };
  
  const ProductGrid = ({ products }) => {
    return (
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductGrid;