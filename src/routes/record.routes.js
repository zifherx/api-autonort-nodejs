import { Router } from 'express'
import * as recordCtrl from '../controllers/record.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

//Obtener Inmatriculados
router.get('/', recordCtrl.getRecords);

//Obtener Inmatriculado por Id
router.get('/:recordId', recordCtrl.getRecordById);

//Crear Inmatriculado
router.post('/', [authJwt.verifyToken, authJwt.isInmatriculadosAsistant, verifySignup.checkRolesExist], recordCtrl.createRecord);

//Actualizar Inmatriculado
router.patch('/:recordId', [authJwt.verifyToken, authJwt.isInmatriculadosAsistant, verifySignup.checkRolesExist], recordCtrl.updateRecordById);

//Remover Inmatriculado
router.delete('/:recordId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], recordCtrl.deleteRecordById);

export default router;