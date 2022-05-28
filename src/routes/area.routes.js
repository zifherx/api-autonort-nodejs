import {Router} from 'express';
import areaController from '../controllers/area.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', areaController.getAll);
router.get('/activos', areaController.getAllActivos);
router.get('/:areaId', areaController.getOneById);
router.post('/',  [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateArea], areaController.createOne);
router.patch('/:areaId', [authJwt.verifyToken, authJwt.isAdmin], areaController.updateOneById);
router.delete('/:areaId', [authJwt.verifyToken, authJwt.isAdmin], areaController.deleteOneById);

export default router;