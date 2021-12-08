import { Router } from 'express';
import metaCtrl from '../controllers/meta.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', metaCtrl.getAll);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], metaCtrl.createOne);

export default router;