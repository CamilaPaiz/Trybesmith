import { ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/Product';
import connection from './connection';

async function create(name:string, amount:string): Promise<IProduct> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name,amount) VALUES(?,?)',
    [name, amount],
  );
  const newProduct = {
    id: insertId,
    name,
    amount,
  };
  return newProduct;
}

export default { create };