import {Router} from 'express';
import permisoCtrl from '../controllers/permiso.controller';
import {authJwt, verifySignup, verifyDuplicate} from '../middlewares';

const router = Router();

router.get('/', permisoCtrl.getAll);
router.post('/by-codigo', permisoCtrl.findByCodigo);
router.post('/by-submodule', permisoCtrl.findBySubmodule);
router.post('/', permisoCtrl.createOne);
router.patch('/:permisoId', permisoCtrl.updateOneById);
router.delete('/:permisoId', permisoCtrl.deleteOneById);

export default router;