import {Router} from 'express';
import docController from '../controllers/tipoDocumento.controller';
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', docController.getAll);
router.get('/activos', docController.getAllByActive);
router.get('/:tipoId', docController.getOneById);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTipoDocumento ], docController.createOne);
router.patch('/:tipoId', [authJwt.verifyToken, authJwt.isAdmin], docController.updateOneById);
router.delete('/:tipoId', [authJwt.verifyToken, authJwt.isAdmin], docController.deleteTipoDocumento);

export default router;