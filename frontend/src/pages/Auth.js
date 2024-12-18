import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Auth.css';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Alternar entre login y register
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    surname: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Hook para redirección

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Simulación de autenticación
    alert(isLogin ? 'Iniciando sesión...' : 'Registrando usuario...');
    onLogin(); // Llama a la función para marcar como autenticado
  };

  // Función para ir a la página de Admin (solo prueba)
  const handleAdminRedirect = () => {
    navigate('/admin'); // Redirige a la página de administración
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Apellido"
                value={formData.surname}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          )}
          <button type="submit" className="auth-button">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>
        <p>
          {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
            {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
          </span>
        </p>

        {/* Botón de Admin solo para pruebas */}
        <button onClick={handleAdminRedirect} className="admin-button">
          Admin
        </button>
      </div>
    </div>
  );
};

export default Auth;
