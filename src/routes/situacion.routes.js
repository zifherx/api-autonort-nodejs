import { Router } from "express";
import * as situacionCtrl from "../controllers/situacion.controller";
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Situacion
router.get("/", situacionCtrl.getAll);

//Obtener Situacion Activos
router.get("/activos", situacionCtrl.getAllActive);

//Obtener Situacion por ID
router.get("/:itemId", situacionCtrl.getOneById);

//Crear Situacion
router.post(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateSituacion],
    situacionCtrl.createOne
);

//Actualizar Situacion
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], situacionCtrl.updateOneById);

//Eliminar Situacion
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], situacionCtrl.deleteOneById);

export default router;
