import Product from '../models/Product.js';
import { Op } from 'sequelize';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

// Obtener todos los productos x las distintas categorias y cuando se crea un nuevo producto q el admin seleccione la categoria
export const getProductsByCategory = async (req, res) => {
  try {
    const { categoria } = req.params;

    // Categorías permitidas
    const categoriasPermitidas = ['Bazar', 'Juguetería', 'Librería', 'Accesorios y Organización'];
    if (!categoriasPermitidas.includes(categoria)) {
      return res.status(400).json({ message: `La categoría "${categoria}" no es válida` });
    }

    const products = await Product.findAll({ where: { categoria } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos por categoría', error });
  }
};

export const getProductsByPrice = async (req, res) => {
  try {
    const { precio } = req.params;

    if (!precio || isNaN(precio)) {
      return res.status(400).json({ message: 'Debe proporcionar un precio válido en la URL.' });
    }

    const products = await Product.findAll({
      where: {
        precio: {
          [Op.lte]: parseFloat(precio),
        },
      },
    });

    res.status(200).json(products); 
  } catch (error) {
    res.status(500).json({ 
      message: 'Error al obtener productos por precio', 
      error: error.message || error 
    });
  }
};

// Agregar un producto
export const addProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen_url, categoria, stock } = req.body;

    const newProduct = await Product.create({ nombre, descripcion, precio, imagen_url, categoria, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar producto', error });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, imagen_url } = req.body;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.update({ nombre, descripcion, precio, stock, imagen_url });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.destroy();
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};

export const applyDiscount = async (req, res) => {
  const { id } = req.params; 
  const { tipoOferta, descuento } = req.body; 

  try {
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });


    await product.update({ oferta_tipo: tipoOferta, descuento });
    res.status(200).json({ message: 'Oferta aplicada correctamente', product });
  } catch (error) {
    res.status(500).json({ message: 'Error al aplicar oferta', error });
  }
};

export const clearOffer = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    
    await product.update({ oferta_tipo: 'ninguna', descuento: null });
    res.status(200).json({ message: 'Oferta eliminada correctamente', product });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar oferta', error });
  }
};



export const getLatestProducts = async (req, res) => {
  try {
    const { limit = 10, days = 30 } = req.query; 
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    const latestProducts = await Product.findAll({
      where: {
        createdAt: { [Op.gte]: cutoffDate }, 
      },
      order: [['createdAt', 'DESC']],
      limit: parseInt(limit),
    });

    res.status(200).json(latestProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los últimos productos', error });
  }
};
