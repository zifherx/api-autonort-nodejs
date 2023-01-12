import { Router } from "express";
import * as statusFileCtrl from "../controllers/statusFile.controller";
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Status File
router.get("/", statusFileCtrl.getAll);

//Obtener Status File Activos
router.get("/activos", statusFileCtrl.getAllActive);

//Obtener Status File por ID
router.get("/:itemId", statusFileCtrl.getOneById);

//Crear Status File
router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusFile], statusFileCtrl.createOne);

//Actualizar Status File
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], statusFileCtrl.updateOneById);

//Eliminar Status File
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], statusFileCtrl.deleteOneById);

export default router;
