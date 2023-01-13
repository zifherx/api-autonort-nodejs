import { Router } from "express";
import controller from '../controllers/leadCRM.controller';

const router = Router();

router.get('/',controller.getAll);
router.get('/:itemId',controller.getOneById);
router.post('/by-estado',controller.getAllByEstado);
router.post('/',controller.createOne);
router.patch('/:itemId',controller.updateOneById);
router.delete('/:itemId',controller.deleteOneById);

export default router;