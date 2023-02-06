import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces/Product';

async function create(name:string, amount:string):Promise<IProduct> {
  const newProduct = await ProductModel.create(name, amount);
  return newProduct;
}

export default { create };