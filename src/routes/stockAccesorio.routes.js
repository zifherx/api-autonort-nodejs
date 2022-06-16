import {Router} from 'express';
import stockCtrl from '../controllers/stockAccesorio.controller';

const router = Router();

router.get('/', stockCtrl.getAll);
router.post('/', stockCtrl.createOne);
router.post('/by-sucursal', stockCtrl.getAllBySucursalMes);

export default router;