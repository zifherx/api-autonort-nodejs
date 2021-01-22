import { Router } from 'express'
import * as propsCtrl from '../controllers/props.controller'
const router = Router();

//Crear Vendedor
router.post('/', propsCtrl.createProp);

//Obtener Vendedores
router.get('/', propsCtrl.getProps);

//Obtener Vendedor por Id
router.get('/:propsId', propsCtrl.getPropById);

//Obtener Accesosrio por código Vehicular
router.post('/find', propsCtrl.getPropsByVehicle);

//Actualizar Vendedor
router.put('/:propsId', propsCtrl.updatePropById);

//Remover Vendedor
router.delete('/:propsId', propsCtrl.deletePropById);

export default router;