import { apiPlanillas } from "../libs/axiosInstance";

const documentosPlanillas = [
    { abreviatura: "N", texto: "BOLETAS" },
    { abreviatura: "R", texto: "GRATIFICACION" },
    { abreviatura: "U", texto: "UTILIDADES" },
    { abreviatura: "A", texto: "VACACIONES" },
    { abreviatura: "T", texto: "CTS" },
];

const planillaController = {
    // PLANILLAS
    getPlanillaOfPeriod: async (req, res) => {
        const { tipoDocumento, dniPersonal, periodoPersonal } = req.body;
        let query = null;

        try {
            if (tipoDocumento === "N") {
                query = await apiPlanillas.get("NORPLANILLAS" + "?" + "tipo=" + tipoDocumento + "&desde_codigo=" + dniPersonal + "&peri_inicio=" + periodoPersonal);
            } else if (tipoDocumento === "U") {
                query = await apiPlanillas.get("NORUTILIDADES" + "?" + "tipo=" + tipoDocumento + "&desde_codigo=" + dniPersonal + "&peri_inicio=" + periodoPersonal);
            } else if (tipoDocumento === "T") {
                query = await apiPlanillas.get("NORCTS" + "?" + "tipo=" + tipoDocumento + "&desde_codigo=" + dniPersonal + "&peri_inicio=" + periodoPersonal);
            } else if (tipoDocumento === "R") {
                query = await apiPlanillas.get("NORGRATIFICACION" + "?" + "tipo=" + tipoDocumento + "&desde_codigo=" + dniPersonal + "&peri_inicio=" + periodoPersonal);
            } else if (tipoDocumento === "A") {
                query = await apiPlanillas.get("NORVACACIONES" + "?" + "tipo=" + tipoDocumento + "&desde_codigo=" + dniPersonal + "&peri_inicio=" + periodoPersonal);
            }

            if (query.data.length === 0)
                return res.status(404).json({ message: `El empleado ${dniPersonal} no cuenta con ${documentosPlanillas.filter(a => a.abreviatura === tipoDocumento)[0].texto} en el periodo ${periodoPersonal}` });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getPlanillaByYear: async (req, res) => {
        const { tipoPlanilla, dniPlanilla, anioPlanilla } = req.body;

        try {
            const query = await apiPlanillas.get(
                "NORRPTPLANILLA" + "?" + "TipoDoc=" + tipoPlanilla + "&CodPerSonal=" + dniPlanilla + "&Anio=" + anioPlanilla
            );

            if (query.data.length === 0)
                return res
                    .status(404)
                    .json({
                        message: `El empleado ${dniPlanilla} no cuenta con ${
                            documentosPlanillas.filter((a) => a.abreviatura == tipoPlanilla)[0].texto
                        } en el año ${anioPlanilla}`,
                    });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default planillaController;
