import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { configDotenv } from 'dotenv';

// Registrar Usuario
export const register = async (req, res) => {
  try {
    const { nombre, email, password, telefono } = req.body;

    // Verificar si el email ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario en la base de datos
    const newUser = await User.create({
      nombre,
      email,
      password: hashedPassword,
      telefono,
    });

    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error en el registro', error: error.message });
  }
};

// Iniciar Sesión
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña ingresada con la encriptada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, nombre: user.nombre },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el inicio de sesión', error: error.message });
  }
};
