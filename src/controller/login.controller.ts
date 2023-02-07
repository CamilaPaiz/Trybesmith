import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import LoginService from '../services/login.service';

async function getLogin(req:Request, res:Response) {
  const { username, password } = req.body;
  const login = await LoginService.getLogin(username, password);
  if (!login) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const secret = 'mysecret';
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ login }, secret, config);
  const data = { token, ...login };
  
  return res.status(200).json({ token: data.token });
} 

export default { getLogin };