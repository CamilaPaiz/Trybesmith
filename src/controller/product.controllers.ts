import { Request, Response } from 'express';
import ProductService from '../services/product.services';

async function create(req:Request, res:Response): Promise<void> {
  const { name, amount } = req.body;
  const newProduct = await ProductService.create(name, amount);
  res.status(201).json(newProduct);
}

export default { create };