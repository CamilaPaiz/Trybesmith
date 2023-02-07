import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { ILogin } from '../interfaces/Login';

async function getLogin(username:string, password:string): Promise<ILogin> {
  const [[result]] = await connection.execute<(
  ILogin & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
    );
  
  return result;
}

export default { getLogin };