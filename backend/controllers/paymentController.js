import { createPayment } from '../services/mercadoPagoService.js';

export const checkout = async (req, res) => {
  const { items } = req.body;

  try {
    const paymentUrl = await createPayment(items);
    res.json({ url: paymentUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
