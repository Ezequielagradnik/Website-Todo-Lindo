import mercadopago from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();


export const createPayment = async (items) => {
  try {
    const preference = {
      items: items.map((item) => ({
        title: item.nombre,
        unit_price: parseFloat(item.precio),
        quantity: item.cantidad,
        currency_id: 'ARS',
      })),
      back_urls: {
        success: 'http://localhost:3000/success',
        failure: 'http://localhost:3000/failure',
        pending: 'http://localhost:3000/pending',
      },
      auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);
    return response.body.init_point; // Devuelve la URL de pago
  } catch (error) {
    console.error('Error al crear el pago:', error);
    throw new Error('Error al crear el pago con Mercado Pago');
  }
};
