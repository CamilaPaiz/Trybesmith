import UserModel from '../models/user.model';
import { IUser } from '../interfaces/User';

async function create(
  username:string, 
  vocation:string, 
  level:number, 
  password:string,
)
  :Promise<IUser> {
  const newUser = await UserModel.create(username, vocation, level, password);
  return newUser;
}

export default { create };