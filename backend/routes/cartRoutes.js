import express from 'express';
import { addToCart, getCartItems, deleteProductFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/add', addToCart);
router.get('/:userId', getCartItems);
router.delete('/:userId/:productId', deleteProductFromCart);

export default router;
