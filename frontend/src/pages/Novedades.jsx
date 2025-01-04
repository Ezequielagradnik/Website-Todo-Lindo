import React, { useState } from 'react';
import NovedadesHeader from '../components/Novedades/NovedadesHeader';
import ProductFilter from '../components/Novedades/ProductFilter';
import ProductGrid from '../components/Novedades/ProductGrid';
import LatestProducts from '../components/Novedades/LatestProducts';

const Novedades = () => {
  const [ setFilters] = useState({
    category: '',
    price: ''
  });

  // Example products data - replace with your actual data
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 50000,
      category: 'electronics'
    },
    // Add more products...
  ];

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setFilters({ category: '', price: '' });
    } else {
      setFilters(prev => ({ ...prev, [filterType]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NovedadesHeader />
      
      <div className="container mx-auto px-4 py-8">
        <LatestProducts products={products} />
        
        <h2 className="text-2xl font-bold mb-6">Explorá nuestras últimas novedades</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>
          
          <div className="md:w-3/4">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedades;