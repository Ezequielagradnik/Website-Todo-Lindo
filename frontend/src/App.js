import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Help from './pages/Help';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Offers from './pages/Ofertas';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Actualiza el estado al loguearse
  };

  return (
    <>
      {/* Renderiza la Home desenfocada */}
      <div className={isAuthenticated ? '' : 'blurred-background'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/help" element={<Help />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/admin" element={<h1>Panel de Administración</h1>} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
      {}
      {!isAuthenticated && <Auth onLogin={handleLogin} />}
    </>
  );
};

export default App;