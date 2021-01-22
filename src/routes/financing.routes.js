import { Router } from 'express'
import * as financingCtrl from '../controllers/financing.controller'
const router = Router();

//Crear Adelanto
router.post('/', financingCtrl.createAdelanto);

//Obtener Adelantos
router.get('/', financingCtrl.getAdelantos);

//Obtener Adelanto por Id
router.get('/:financingId', financingCtrl.getAdelantoById);

//Actualizar Adelanto
router.put('/:financingId', financingCtrl.updateAdelandoById);

//Remover Adelanto
router.delete('/:financingId', financingCtrl.deleteAdelantoById);

export default router;