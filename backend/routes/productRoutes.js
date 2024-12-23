import express from 'express';
import { getAllProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory,getProductsByPrice } from '../controllers/productController.js';
import { verifyToken, verifyAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas protegidas por admin
router.get('/', getAllProducts);
router.post('/', addProduct);
router.put('/:id',  updateProduct);
router.delete('/:id',  deleteProduct);
router.get('/categoria/:categoria', getProductsByCategory);
router.get('/price/:precio', getProductsByPrice);

export default router;
