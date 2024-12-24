import User from './User.js';
import Product from './Product.js';
import Cart from './Cart.js';
import Order from './Order.js';
import sequelize from '../config/database.js';

// Relaciones
User.hasMany(Cart, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
Cart.belongsTo(User, { foreignKey: 'usuario_id' });

Product.hasMany(Cart, { foreignKey: 'articulo_id', onDelete: 'CASCADE' });
Cart.belongsTo(Product, { foreignKey: 'articulo_id' });

User.hasMany(Order, { foreignKey: 'usuario_id', onDelete: 'SET NULL' });
Order.belongsTo(User, { foreignKey: 'usuario_id' });


export { User, Product, Cart, Order, sequelize };
