import { Router } from 'express'
import * as propsCtrl from '../controllers/props.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Accesorios
router.get('/', propsCtrl.getAll);

//Obtener Accesorios activos
router.get('/activos', propsCtrl.getAccesoriosActivos)

//Obtener Accesorio por Id
router.get('/:propsId', propsCtrl.getAccesorioById);

//Obtener Accesorio por código Vehicular
router.post('/by-modelo', propsCtrl.getAccesorioByAuto);

//Crear Accesorio
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateAccesorio], propsCtrl.createProp);

//Actualizar Accesorio
router.patch('/:propsId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], propsCtrl.updatePropById);

//Remover Accesorio
router.delete('/:propsId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], propsCtrl.deletePropById);

export default router;