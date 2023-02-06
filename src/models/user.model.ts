import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser } from '../interfaces/User';

async function create(
  username:string,
  vocation:string,
  level:number,
  password:string,
):Promise<IUser> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username,vocation,level,password) VALUES(?,?,?,?)',
    [username, vocation, level, password],      
  );
  const newUser = {
    id: insertId,
    username,
    vocation,
    level,
    password,
  };
  
  return newUser;
}

export default { create };
