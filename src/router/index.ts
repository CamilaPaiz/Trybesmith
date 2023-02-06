import { Router } from 'express';
import ProductControllers from '../controller/product.controllers';

const router = Router();

router.post('/products', ProductControllers.create);

export default router;