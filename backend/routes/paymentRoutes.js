import { Router } from 'express';
import { checkout } from '../controllers/paymentController.js';

const router = Router();

router.post('/checkout', checkout);

export default router;
