import { Router } from 'express'
import recordCtrl from '../controllers/record.controller'
import { authJwt, verifyDuplicate } from '../middlewares'

const router = Router();

router.get('/', recordCtrl.getAll);

router.get('/:recordId', recordCtrl.getOneById);

router.post('/by-seller', recordCtrl.getAllBySeller);

router.post('/count/by-estado', recordCtrl.countAllByStatus);

router.post('/by-sucursal', recordCtrl.getAllBySucursal);

router.post('/', [authJwt.verifyToken, authJwt.isInmatriculadosAsistantyAdministrador, verifyDuplicate.checkDuplicateTramite], recordCtrl.createOne);

router.patch('/:recordId', [authJwt.verifyToken, authJwt.isInmatriculadosAsistantyAdministrador], recordCtrl.updateOneById);

router.delete('/:recordId', [authJwt.verifyToken, authJwt.isAdmin], recordCtrl.deleteOneById);

export default router;