import { Router } from 'express';
import circularController from '../controllers/circular.controller';

const router = Router();

router.post('/', circularController.createOne)

export default router;