import { Router } from "express";
import controller from '../controllers/gps.controller';

const router = Router();

router.get('/', controller.getAllItems);
router.get('/:itemId', controller.getOneItem);
router.post('/', controller.createOneItem);
router.patch('/:itemId', controller.updateItemById);
router.delete('/:itemId', controller.deleteItemById);

export default router;
