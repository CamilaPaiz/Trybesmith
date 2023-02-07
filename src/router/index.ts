import { Router } from 'express';
import LoginController from '../controller/login.controller';
import OrderController from '../controller/order.controller';
import ProductControllers from '../controller/product.controllers';
import UserController from '../controller/user.controller';
import error from '../middlewares/error.middleware';

const router = Router();

router.post(
  '/products', 
  error.validateProductName,
  error.validateProductAmount, 
  ProductControllers.create,
);
router.get('/products', ProductControllers.getAll);
router.post('/users', UserController.create);
router.get('/orders', OrderController.getAll);
router.post('/login', error.validateLogin, LoginController.getLogin);

export default router;