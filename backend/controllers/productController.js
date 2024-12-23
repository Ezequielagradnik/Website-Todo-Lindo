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
