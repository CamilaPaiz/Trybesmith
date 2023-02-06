import { Router } from 'express';
import ProductControllers from '../controller/product.controllers';
import UserController from '../controller/user.controller';

const router = Router();

router.post('/products', ProductControllers.create);
router.get('/products', ProductControllers.getAll);
router.post('/users', UserController.create);

export default router;