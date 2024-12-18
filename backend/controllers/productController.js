import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

export const getProductsbyid = async (req,res) => {

  try {
  const products = await Product.findOne(); 
  res.json(products)
  } catch (error) {
   res.status(500).json({error: 'No hay ningun producto con ese ID'})
  }
}