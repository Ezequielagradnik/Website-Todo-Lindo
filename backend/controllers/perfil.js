import Purchase from "../models/Purchase.js";
import Product from '../models/Product.js';

export const getPurchaseHistory = async (req, res) => {
    const { userId } = req.params;
  
    if (!userId) {
      return res.status(400).json({ message: 'El ID del usuario es obligatorio.' });
    }
  
    try {
      const purchases = await Purchase.findAll({
        where: { usuario_id: userId },
        include: [
          {
            model: Product,
            as: 'producto', 
            attributes: ['id', 'nombre', 'descripcion', 'precio', 'imagen_url'],
          },
        ],
      });
  
      if (!purchases.length) {
        return res.status(404).json({ message: 'No se encontraron compras para este usuario.' });
      }
  
      res.status(200).json(purchases);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Error al obtener historial de compras', error });
    }
  };
  