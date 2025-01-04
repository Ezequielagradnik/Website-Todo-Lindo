import React from 'react';
import '../../novedades.css';

const LatestProducts = ({ products }) => {
    return (
      <div className="latest-products">
        <h2 className="section-title">Últimos ingresos</h2>
        <div className="products-grid">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {/* Product image will go here HIJO DE PUTA*/}
              </div>
              <div className="product-info">
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default LatestProducts;