import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces/Product';

async function create(name:string, amount:string):Promise<IProduct> {
  const newProduct = await ProductModel.create(name, amount);
  return newProduct;
}

async function getAll() {
  const products = await ProductModel.getAll();
  return products;
}

export default { create, getAll };