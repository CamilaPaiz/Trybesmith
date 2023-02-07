import { Request, Response } from 'express';
import OrderService from '../services/order.service';

async function getAll(_req:Request, res:Response) {
  const orders = await OrderService.getAll();
  console.log('controller', orders);
  res.status(200).json(orders);
}

export default { getAll };