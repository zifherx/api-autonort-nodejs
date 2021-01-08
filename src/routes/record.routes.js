import { Router } from 'express'
import * as recordCtrl from '../controllers/record.controller'

const router = Router();

//Crear Venta
router.post('/', recordCtrl.createRecord);

//Obtener Venta
router.get('/', recordCtrl.getRecords);

//Obtener Venta por Id
router.get('/:recordId', recordCtrl.getRecordById);

//Actualizar Venta
router.put('/:recordId', recordCtrl.updateRecordById);

//Remover Venta
router.delete('/:recordId', recordCtrl.deleteRecordById);

export default router;