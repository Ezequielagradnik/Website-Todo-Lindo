import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Help from './pages/Help';
import Checkout from './pages/Checkout';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/help" element={<Help />} />
      <Route path="/Checkout" element={<Checkout/>} />
    </Routes>
    <WhatsAppButton /> {}
    <Footer />
  </>
);

export default App;
