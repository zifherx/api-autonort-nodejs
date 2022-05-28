import {Router} from 'express';
import entregaCtrl from '../controllers/entrega.controller';

const router = Router();

router.get('/', entregaCtrl.getAll );
router.post('/', entregaCtrl.createOne );

export default router;