import { Router } from "express";
import controller from "../controllers/tipoSoat.controller";

const router = Router();

router.get('/', controller.getAll);
router.get('/activos', controller.getAllByActivo);
router.get('/:itemId', controller.getOneById);
router.post('/', controller.createOne);
router.patch('/:itemId', controller.updateOneById);
router.delete('/:itemId', controller.deleteOneById);

export default router;
