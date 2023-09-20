import { apiPlanillas } from "../libs/axiosInstance";

const planillaController = {
    // PLANILLAS
    getPlanillaOfMonth: async (req, res) => {
        const { tipo, desde_codigo, peri_inicio } = req.body;

        try {
            const query = await apiPlanillas.get(
                // "NORPLANILLAS" + "?" + "tipo=" + tipo + "&desde_codigo=" + desde_codigo + "&peri_inicio=" + peri_inicio
                "NORPLANILLAS" + "?" + "tipo=N&desde_codigo=" + desde_codigo + "&peri_inicio=" + peri_inicio
            );

            if (query.data.length === 0)
                return res.status(404).json({ message: `El empleado ${desde_codigo} no cuenta con boletas en el periodo ${peri_inicio}` });

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
                return res.status(404).json({ message: `El empleado ${dniPlanilla} no cuenta con boletas en el año ${anioPlanilla}` });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getUtilidades: async (req, res) => {
        const { desde_codigo, peri_inicio } = req.body;

        try {
            const query = await apiPlanillas.get("NORUTILIDADES" + "?" + "tipo=U&desde_codigo=" + desde_codigo + "&peri_inicio=" + peri_inicio);

            if (query.data.length === 0)
                return res.status(404).json({ message: `El empleado ${desde_codigo} no cuenta con utilidades en el periodo ${peri_inicio}` });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getCTS: async (req, res) => {
        const { desde_codigo, peri_inicio } = req.body;

        try {
            const query = await apiPlanillas.get("NORCTS" + "?" + "tipo=T&desde_codigo=" + desde_codigo + "&peri_inicio=" + peri_inicio);

            if (query.data.length === 0)
                return res.status(404).json({ message: `El empleado ${desde_codigo} no cuenta con CTS en el periodo ${peri_inicio}` });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getGratificacion: async (req, res) => {
        const { desde_codigo, peri_inicio } = req.body;

        try {
            const query = await apiPlanillas.get("NORGRATIFICACION" + "?" + "tipo=R&desde_codigo=" + desde_codigo + "&peri_inicio=" + peri_inicio);

            if (query.data.length === 0)
                return res.status(404).json({ message: `El empleado ${desde_codigo} no cuenta con gratificación en el periodo ${peri_inicio}` });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getVacaciones: async (req, res) => {
        const { desde_codigo, peri_inicio } = req.body;

        try {
            const query = await apiPlanillas.get("NORVACACIONES" + "?" + "tipo=A&desde_codigo=" + desde_codigo + "&peri_inicio=" + peri_inicio);

            if (query.data.length === 0)
                return res.status(404).json({ message: `El empleado ${desde_codigo} no cuenta con vacaciones en el periodo ${peri_inicio}` });

            res.json({ total: query.data.length, all: query.data });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default planillaController;
