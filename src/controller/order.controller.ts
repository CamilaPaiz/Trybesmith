import { Request, Response } from 'express';
import OrderService from '../services/order.service';

async function getAll(_req:Request, res:Response) {
  const orders = await OrderService.getAll();
 
  res.status(200).json(orders);
}

export default { getAll };