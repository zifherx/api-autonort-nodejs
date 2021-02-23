import { Router } from 'express'
import * as propsCtrl from '../controllers/props.controller'
import { authJwt, verifySignup } from '../middlewares'
const router = Router();

//Obtener Vendedores
router.get('/', propsCtrl.getAll);

//Obtener Accesorios activos de
router.get('/activos', propsCtrl.getAccesoriosActivos)

//Obtener Vendedor por Id
router.get('/:propsId', propsCtrl.getAccesorioById);

//Obtener Accesosrio por código Vehicular
router.post('/find', propsCtrl.getAccesorioByAuto);

//Crear Vendedor
router.post('/', [authJwt.verifyToken, authJwt.isChiefTunning, verifySignup.checkRolesExist], propsCtrl.createProp);

//Actualizar Vendedor
router.patch('/:propsId', [authJwt.verifyToken, authJwt.isChiefTunning, verifySignup.checkRolesExist], propsCtrl.updatePropById);

//Remover Vendedor
router.delete('/:propsId', [authJwt.verifyToken, authJwt.isChiefTunning, verifySignup.checkRolesExist], propsCtrl.deletePropById);

export default router;