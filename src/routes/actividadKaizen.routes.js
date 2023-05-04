import { Router } from "express";
import activityController from "../controllers/actividadKaizen.controller";
import { authJwt } from "../middlewares";
import multer from "../middlewares/multer";

const router = Router();

router.get("/", activityController.getAll);
router.get("/:itemId", activityController.getOneById);
router.post(
    "/",
    authJwt.verifyToken,
    multer.fields([
        // Problema
        { name: "evidenciaProblema", maxCount: 1 },
        { name: "flujogramaProblema", maxCount: 1 },
        { name: "graficoProblema", maxCount: 1 },
        // Contramedida
        { name: "avatarContramedida", maxCount: 1 },
        { name: "flujogramaContramedida", maxCount: 1 },
        // Resultados
        { name: "indicadores_cuantitativos", maxCount: 1 },
        { name: "anexos", maxCount: 10 },
    ]),
    activityController.createOne
);
router.patch(
    "/:itemId",
    authJwt.verifyToken,
    multer.fields([
        // Problema
        { name: "evidenciaProblema", maxCount: 1 },
        { name: "flujogramaProblema", maxCount: 1 },
        { name: "graficoProblema", maxCount: 1 },
        // Contramedida
        { name: "avatarContramedida", maxCount: 1 },
        { name: "flujogramaContramedida", maxCount: 1 },
        // Resultados
        { name: "indicadores_cuantitativos", maxCount: 1 },
        { name: "anexos", maxCount: 10 },
    ]),
    activityController.updateOneById
);
router.patch("/evidences/:itemId", activityController.updateEvidencesById);
router.delete("/:itemId", activityController.deleteOneById);

export default router;
