import { Router } from 'express'
import recordCtrl from '../controllers/record.controller'
import { authJwt, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Inmatriculados
router.get('/', recordCtrl.getAll);

//Obtener Inmatriculado por Id
router.get('/:recordId', recordCtrl.getOneById);

//Por Cliente
router.post('/by-seller', recordCtrl.getAllBySeller);

router.post('/count/by-estado', recordCtrl.countAllByStatus);

//Get Tramites by Sucursal
router.post('/by-sucursal', recordCtrl.getAllBySucursal);

//Crear Inmatriculado
router.post('/', [authJwt.verifyToken, authJwt.isInmatriculadosAsistantyAdministrador, verifyDuplicate.checkDuplicateTramite], recordCtrl.createOne);

//Actualizar Inmatriculado
router.patch('/:recordId', [authJwt.verifyToken, authJwt.isInmatriculadosAsistantyAdministrador], recordCtrl.updateOneById);

//Remover Inmatriculado
router.delete('/:recordId', [authJwt.verifyToken, authJwt.isAdmin], recordCtrl.deleteOneById);

export default router;