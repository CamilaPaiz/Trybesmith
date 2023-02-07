import { NextFunction, Request, Response /* ErrorRequestHandler */ } from 'express';
import { ILogin } from '../interfaces/Login';
import { IProduct } from '../interfaces/Product';

function validateLogin(req:Request, res:Response, next:NextFunction) {
  const { username, password } = req.body as ILogin;
  if (!username) {
    const message = '"username" is required';
    return res.status(400).json({ message });
  }
  if (!password) {
    const message = '"password" is required';
    return res.status(400).json({ message });
  }
  
  next();
}

function validateProductName(req:Request, res:Response, next:NextFunction) {
  const { name } = req.body as IProduct;
  if (!name) {
    const message = '"name" is required';
    return res.status(400).json({ message });
  }
  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return res.status(422).json({ message });
  }
  if (name.length < 3) {
    const message = '"name" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }
  
  next();
}

function validateProductAmount(req:Request, res:Response, next:NextFunction) {
  const { amount } = req.body as IProduct;
  if (!amount) {
    const message = '"amount" is required';
    return res.status(400).json({ message });
  }
  if (amount.length < 3) {
    const message = '"amount" length must be at least 3 characters long';
    return res.status(422).json({ message });
  }
  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return res.status(422).json({ message });
  }
  
  next();
}

export default { validateLogin, validateProductName, validateProductAmount };