import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './models/index.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import UserRoutes from './routes/UserRoutes.js'
import perfilRoutes from './routes/perfilRoutes.js'
import initializeAssociations from './models/associations.js';


dotenv.config();
initializeAssociations();
const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/perfil', perfilRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
