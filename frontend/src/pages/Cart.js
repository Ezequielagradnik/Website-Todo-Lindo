import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // Estado del carrito con ejemplos
  const [cart, setCart] = useState([
    { id: 1, name: 'Cartera Roja', price: 2000, quantity: 1 },
    { id: 2, name: 'jesucristo estatua', price: 3500, quantity: 1 },
    { id: 3, name: 'arbol de navidad', price: 15000, quantity: 2 },
    { id: 4, name: 'espada', price: 2500, quantity: 1 },
  ]);

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Calcula el total del carrito cada vez que cambia el estado de 'cart'
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="card flex">
          <p>
            {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      {cart.length > 0 ? (
        <button onClick={handleCheckout}>Proceder al Pago</button>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
