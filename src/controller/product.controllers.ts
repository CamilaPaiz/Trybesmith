import { Request, Response } from 'express';
import ProductService from '../services/product.services';

async function create(req:Request, res:Response): Promise<void> {
  const { name, amount } = req.body;
  const newProduct = await ProductService.create(name, amount);
  res.status(201).json(newProduct);
}

async function getAll(_req:Request, res:Response) {
  const products = await ProductService.getAll();
  res.status(200).json(products);
}

export default { create, getAll };