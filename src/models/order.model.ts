import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/Order';
import connection from './connection';

async function getAll():Promise<IOrder[]> {
  const [result] = await connection.execute<(IOrder & RowDataPacket)[]>(
    `SELECT o.id,o.user_id as userId, json_arrayagg(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id
    GROUP BY o.id
    ORDER BY o.id
    `);
  console.log('model', result);
  return result;
}

export default { getAll };