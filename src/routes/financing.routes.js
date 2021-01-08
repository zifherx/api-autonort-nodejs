import { Router } from 'express'
import * as financingCtrl from '../controllers/financing.controller'
const router = Router();

//Crear Financiamiento
router.post('/', financingCtrl.createFinancing);

//Obtener Financiamientos
router.get('/', financingCtrl.getFinancing);

//Obtener Financiamiento por Id
router.get('/:financingId', financingCtrl.getFinancingById);

//Actualizar Financiamiento
router.put('/:financingId', financingCtrl.updateFinancingById);

//Remover Financiamiento
router.delete('/:financingId', financingCtrl.deleteFinancingById);

export default router;