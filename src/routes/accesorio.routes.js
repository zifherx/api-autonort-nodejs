import { Router} from 'express';
import accesorioCtrl from '../controllers/accesorio.controller';
import { authJwt, verifyDuplicate} from '../middlewares'

const router = Router();

router.get('/activos', accesorioCtrl.getActivos);
router.get('/:accesorioId', accesorioCtrl.getOne);
router.get('/', accesorioCtrl.getAll);
router.post('/', accesorioCtrl.createOne);
router.patch('/:accesorioId', accesorioCtrl.updateById);
router.delete('/:accesorioId', accesorioCtrl.deleteById);

export default router;