import OrderModel from '../models/order.model';

async function getAll() {
  const orders = await OrderModel.getAll();
  console.log('service', orders);
  return orders;
}

export default { getAll };