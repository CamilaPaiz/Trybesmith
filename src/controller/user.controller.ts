import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import UserService from '../services/user.service';

async function create(req:Request, res:Response): Promise<void> {
  const { username, vocation, level, password } = req.body;
  const newUser = await UserService.create(username, vocation, level, password);
  /* if (newUser) res.status(newUser.type).json({ message: newUser.message }); */
  const secret = 'mysecret';
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ newUser }, secret, config);
  const data = { token, ...newUser };
  res.status(201).json({ token: data.token });
}

export default { create };
