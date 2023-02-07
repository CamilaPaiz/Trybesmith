import LoginModel from '../models/login.model';
import { ILogin } from '../interfaces/Login';

async function getLogin(username:string, password:string):Promise<ILogin> {
  const userLogin = await LoginModel.getLogin(username, password);
  
  return userLogin;
}

export default { getLogin };