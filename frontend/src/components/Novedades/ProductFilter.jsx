import React from 'react';
import '../../novedades.css';

const ProductFilter = ({ onFilterChange }) => {
    return (
      <div className="filter-section">
        <h3 className="filter-title">Filtros</h3>
        <div className="filter-group">
          <label className="filter-label">Categoría</label>
          <select 
            className="filter-select"
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            <option value="">Todas</option>
            <option value="electronics">Electrónicos</option>
            <option value="clothing">Ropa</option>
            <option value="home">Hogar</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label className="filter-label">Precio</label>
          <select 
            className="filter-select"
            onChange={(e) => onFilterChange('price', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>
  
        <button
          className="filter-button"
          onClick={() => onFilterChange('reset')}
        >
          Filtrar
        </button>
      </div>
    );
  };
  

export default ProductFilter;