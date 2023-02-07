import { Router } from 'express';
import LoginController from '../controller/login.controller';
import OrderController from '../controller/order.controller';
import ProductControllers from '../controller/product.controllers';
import UserController from '../controller/user.controller';
import validate from '../middlewares/error.middleware';
import validUser from '../middlewares/error.user.middleware';

const router = Router();

router.post(
  '/products', 
  validate.validateProductName,
  validate.validateProductAmount, 
  ProductControllers.create,
);
router.get('/products', ProductControllers.getAll);
router.post(
  '/users',
  validUser.validateUsername,
  validUser.validateLevel,
  validUser.validateVocation,
  validUser.validatePassword,
  UserController.create,
);
router.get('/orders', OrderController.getAll);
router.post('/login', validate.validateLogin, LoginController.getLogin);

export default router;