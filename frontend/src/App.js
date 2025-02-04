import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Help from './pages/Help';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import Offers from './pages/Ofertas';
import Novedades from './pages/Novedades';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/help" element={<Help />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/admin" element={<h1>Panel de Administración</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="category/Novedades" element={<Novedades />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
  );
};

export default App;
