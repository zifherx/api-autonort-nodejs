import { Router } from "express";
import catalogoController from "../controllers/catalogoVehicular.controller";

const router = Router();

router.get("/", catalogoController.getAll);
router.get("/:itemId", catalogoController.getOneById);
router.post("/by-sede", catalogoController.searchCatalogoFromSedeByAnioModelo);
router.post("/unidad/by-codtdp", catalogoController.searchUnidadFromSedeAnioModeloByCodTDP);
router.post("/", catalogoController.createOne);
router.patch("/:itemId", catalogoController.updateOneById);
router.delete("/:itemId", catalogoController.deleteOneById);

export default router;
