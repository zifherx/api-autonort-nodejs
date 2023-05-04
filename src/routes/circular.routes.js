import { Router } from 'express';
import circularController from '../controllers/circular.controller';
import multer from '../middlewares/multer';

const router = Router();

router.get('/', circularController.getAll);
router.get('/by', circularController.getAllByYear);
router.post('/', multer.single('avatar') ,circularController.createOne);
router.delete('/:itemId', circularController.deleteOneById);

export default router;
