import React, { useState, useEffect } from 'react';
import '../AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', image: '' });
  const [editingId, setEditingId] = useState(null);

  // Fetch productos
  const fetchProducts = async () => {
    const response = await fetch('http://localhost:4000/api/products');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Manejar inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Guardar producto (crear/editar)
  const handleSave = async () => {
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `http://localhost:4000/api/products/${editingId}`
      : 'http://localhost:4000/api/products';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer YOUR_TOKEN' },
      body: JSON.stringify(formData),
    });

    fetchProducts();
    setFormData({ name: '', description: '', price: '', image: '' });
    setEditingId(null);
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/api/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: 'Bearer YOUR_TOKEN' },
    });

    fetchProducts();
  };

  // Editar producto
  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>

      {/* Formulario */}
      <div className="admin-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={formData.image}
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>{editingId ? 'Actualizar' : 'Agregar'}</button>
      </div>

      {/* Lista de productos */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleEdit(product)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
