import React, { useState } from 'react';
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

  const [loading, setLoading] = useState(false); // Estado para mostrar carga
  const [error, setError] = useState(''); // Estado para mostrar errores

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      const url = isLogin
        ? 'https://ep-spring-shape-a5tgjgrc.us-east-2.aws.neon.tech/api/users/login'  // Endpoint para Login
        : 'https://ep-spring-shape-a5tgjgrc.us-east-2.aws.neon.tech/api/users/register'; // Endpoint para Register

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          password: formData.password,
          telefono: formData.surname, // surname usado como teléfono
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud');
      }

      alert(data.message);

      if (isLogin) {
        localStorage.setItem('token', data.token); // Guarda el token en localStorage
        onLogin(); // Llama a la función para marcar como autenticado
      }

      setFormData({
        email: '',
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
        {error && <p className="auth-error">{error}</p>}
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
                placeholder="Teléfono"
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
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Procesando...' : isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>
        <p>
          {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} className="auth-toggle">
            {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
