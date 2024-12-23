import Cart from '../models/Cart.js'; 
import Product from '../models/Product.js';

export const addToCart = async (req, res) => {
  const { userId, productId, cantidad } = req.body;

  try {
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    const cartItem = await Cart.create({ usuario_id: userId, articulo_id: productId, cantidad });
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};


export const getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await Cart.findAll({
      where: { usuario_id: userId },
      include: Product,
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener carrito' });
  }
};

export const deleteProductFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cartItem = await Cart.findOne({
      where: { usuario_id: userId, articulo_id: productId },
    });

    if (!cartItem) return res.status(404).json({ error: 'Producto no encontrado en el carrito' });

    await cartItem.destroy();
    res.status(200).json({ message: 'Producto eliminado del carrito correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto del carrito' });
  }
};
