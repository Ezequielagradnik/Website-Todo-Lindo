import express from 'express';
import { getPurchaseHistory } from '../controllers/perfil.js';

const router = express.Router();

router.get('/:userId', getPurchaseHistory);

export default router;