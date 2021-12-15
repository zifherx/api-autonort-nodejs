import { Router } from 'express';
import metaCtrl from '../controllers/meta.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', metaCtrl.getAll);

router.get('/:metaId', metaCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], metaCtrl.createOne);

router.patch('/:metaId', [authJwt.verifyToken, authJwt.isAdmin], metaCtrl.updateOneById);

router.delete('/:metaId', [authJwt.verifyToken, authJwt.isAdmin], metaCtrl.deleteOneById);

export default router;