import express from 'express';
import { getAllProducts, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { verifyToken, verifyAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas protegidas por admin
router.get('/', getAllProducts);
router.post('/', verifyToken, verifyAdmin, addProduct);
router.put('/:id', verifyToken, verifyAdmin, updateProduct);
router.delete('/:id', verifyToken, verifyAdmin, deleteProduct);

export default router;
