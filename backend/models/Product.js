import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Product = sequelize.define('Product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.STRING, allowNull: false },
  precio: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  imagen_url: { type: DataTypes.STRING, allowNull: false },
  categoria: {type:DataTypes.ENUM("Bazar", "Juguetería", "Librería", "Accesorios y Organización"), allowNull:false}
}, {
  timestamps: true, 
});

export default Product;
