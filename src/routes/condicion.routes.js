import { Router } from "express";
import * as condicionCtrl from "../controllers/condicion.controller";
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Condicion
router.get("/", condicionCtrl.getAll);

//Obtener Condicion Activos
router.get("/activos", condicionCtrl.getAllActive);

//Obtener Condicion por ID
router.get("/:itemId", condicionCtrl.getOneById);

//Crear Condicion
router.post(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateCondicion],
    condicionCtrl.craeteOne
);

//Actualizar Condicion
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], condicionCtrl.updateOneById);

//Eliminar Condicion
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], condicionCtrl.deleteOneById);

export default router;
