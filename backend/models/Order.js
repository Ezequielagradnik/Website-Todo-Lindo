import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  estado: { type: DataTypes.STRING, defaultValue: 'pendiente' },
});

export default Order;
