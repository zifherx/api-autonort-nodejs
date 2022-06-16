import {Router} from 'express';
import ventaCtrl from '../controllers/ventasAccesorio.controller';

const router = Router();

router.get('/', ventaCtrl.getAll);
router.post('/', ventaCtrl.createOne);
router.post('/by-sucursal', ventaCtrl.getAllBySucursalMes);

export default router;