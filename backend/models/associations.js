import Product from './Product.js';
import User from './User.js';
import Purchase from './Purchase.js';

// Definir relaciones
Purchase.belongsTo(Product, { foreignKey: 'articulo_id', as: 'producto' }); 
Purchase.belongsTo(User, { foreignKey: 'usuario_id', as: 'usuario' }); 

Product.hasMany(Purchase, { foreignKey: 'articulo_id', as: 'compras' }); 
User.hasMany(Purchase, { foreignKey: 'usuario_id', as: 'compras' }); 

export default function initializeAssociations() {
 
}
