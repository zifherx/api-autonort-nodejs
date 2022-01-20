import { Router } from 'express';
import ofertaCtrl from '../controllers/oferta.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/activos', ofertaCtrl.getOneActivos);
router.get('/:ofertaId', ofertaCtrl.getOneById);
router.get('/', ofertaCtrl.getAll);
router.post('/', ofertaCtrl.createOne);
router.patch('/:ofertaId', ofertaCtrl.updateOneById);
router.delete('/:ofertaId', ofertaCtrl.deleteOneById);

export default router;