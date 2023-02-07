import OrderModel from '../models/order.model';

async function getAll() {
  const orders = await OrderModel.getAll();
  
  return orders;
}

export default { getAll };