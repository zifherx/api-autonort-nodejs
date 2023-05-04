import ActividadKaizen from "../models/ActividadKaizen";
import Area from "../models/Area";
import Sucursal from "../models/Sucursal";
import User from "../models/User";
import EstadoKaizen from "../models/EstadoKaizen";
import TipoMejoraKaizen from "../models/TipoMejoraKaizen";
import UbicacionMejoraKaizen from "../models/UbicacionMejoraKaizen";
import ImpactoKPIKaizen from "../models/ImpactoKPIKaizen";

const activityController = {};

activityController.getAll = async (req, res) => {
    try {
        const query = await ActividadKaizen.find()
            .sort({ fechaIngreso: -1 })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "responsable",
                select: "name username",
            })
            .populate({
                path: "area",
                select: "name",
            })
            .populate({
                path: "aprobadoBy",
                select: "name username",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "kpiImpactoE",
                select: "name description estado",
            })
            .populate({
                path: "ubicacionMejoraE",
                select: "name description estado",
            })
            .populate({
                path: "tipoMejoraE",
                select: "name abreviatura description estado",
            })
            .populate({
                path: "estadoE",
                select: "name valor",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No se encontraron actividades` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

activityController.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await ActividadKaizen.findById(itemId)
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "responsable",
                select: "name username",
            })
            .populate({
                path: "area",
                select: "name",
            })
            .populate({
                path: "aprobadoBy",
                select: "name username",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "kpiImpactoE",
                select: "name description estado",
            })
            .populate({
                path: "ubicacionMejoraE",
                select: "name description estado",
            })
            .populate({
                path: "tipoMejoraE",
                select: "name abreviatura description estado",
            })
            .populate({
                path: "estadoE",
                select: "name",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: `No se encontró la actividad` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

activityController.createOne = async (req, res) => {
    const {
        //*********** Actividad **********/
        cod_interno,
        titulo_actividad,
        area,
        tipoMejora,
        tipoMejoraE,
        ubicacionMejora,
        ubicacionMejoraE,
        //*********** Actividad **********/
        //*********** Problema **********/
        problema,
        tituloFotoProblema,
        descripcionProblema,
        causaRaizProblema,
        //*********** Problema **********/
        //*********** Contramedida **********/
        contramedida,
        descripcionContramedida,
        tituloFotoContramedida,
        //*********** Contramedida **********/
        //*********** Resultados **********/
        resultados,
        indicadores_cualitativos,
        titulo_indicadores_cuantitativos,
        descripcionResultados,
        proximas_actividades,
        titular,
        kpiImpacto,
        kpiImpactoE,
        //*********** Resultados **********/
        createdBy,
        estado,
        estadoE,
        concesionario,
        sucursal,
        sucursalE,
        fechaIngreso,
        responsable,
        fechaBorrador,
    } = req.body;
    const { evidenciaProblema, flujogramaProblema, graficoProblema, avatarContramedida, flujogramaContramedida, indicadores_cuantitativos, anexos } =
        req.files;

    // console.log("Adjuntos:", req.files);
    let flujoProblema = null;
    let grafiProblema = null;
    let flujoContramedida = null;

    try {
        if (flujogramaProblema == null || flujogramaProblema == undefined) {
            flujoProblema = "";
        } else {
            flujoProblema = flujogramaProblema[0].location;
        }

        if (graficoProblema == null || graficoProblema == undefined) {
            grafiProblema = "";
        } else {
            grafiProblema = graficoProblema[0].location;
        }

        if (flujogramaContramedida == null || flujogramaContramedida == undefined) {
            flujoContramedida = "";
        } else {
            flujoContramedida = flujogramaContramedida[0].location;
        }

        const newObj = new ActividadKaizen({
            cod_interno,
            titulo_actividad,
            concesionario,
            sucursal,
            fechaIngreso,
            tipoMejora,
            ubicacionMejora,
            // Problema
            problema,
            tituloFotoProblema,
            descripcionProblema,
            evidenciaProblema: evidenciaProblema[0].location,
            flujogramaProblema: flujoProblema,
            graficoProblema: grafiProblema,
            causaRaizProblema,
            // Contramedida
            contramedida,
            tituloFotoContramedida,
            avatarContramedida: avatarContramedida[0].location,
            descripcionContramedida,
            flujogramaContramedida: flujoContramedida,
            // Resultados
            resultados,
            indicadores_cualitativos,
            titulo_indicadores_cuantitativos,
            indicadores_cuantitativos: indicadores_cuantitativos[0].location,
            descripcionResultados,
            proximas_actividades,
            titular,
            anexos: anexos.map((a) => a.location),
            kpiImpacto,
            // General
            estado,
            responsable,
            fechaBorrador,
        });

        if (area == null || area == undefined) {
            newObj.area = null;
        } else {
            const areaFound = await Area.findOne({ name: area });
            if (!areaFound) return res.status(404).json({ message: `Area ${area} no encontrada` });
            newObj.area = areaFound._id;
        }

        if (sucursalE == null || sucursalE == undefined) {
            newObj.sucursalE = null;
        } else {
            const sucursalFound = await Sucursal.findOne({ name: sucursalE });
            if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
            newObj.sucursalE = sucursalFound._id;
        }

        if (tipoMejoraE == null || tipoMejoraE == undefined) {
            newObj.tipoMejoraE = null;
        } else {
            const tipoMejoraFound = await TipoMejoraKaizen.findOne({ abreviatura: tipoMejoraE });
            if (!tipoMejoraFound) return res.status(404).json({ message: `Tipo de Mejora ${tipoMejoraE} no encontrada` });
            newObj.tipoMejoraE = tipoMejoraFound._id;
        }

        if (ubicacionMejoraE == null || ubicacionMejoraE == undefined) {
            newObj.ubicacionMejoraE = null;
        } else {
            const ubicacionMejoraFound = await UbicacionMejoraKaizen.findOne({ name: ubicacionMejoraE });
            if (!ubicacionMejoraFound) return res.status(404).json({ message: `Ubicación mejora ${ubicacionMejoraE} no encontrada` });
            newObj.ubicacionMejoraE = ubicacionMejoraFound._id;
        }

        if (kpiImpactoE == null || kpiImpactoE == undefined) {
            newObj.kpiImpactoE = null;
        } else {
            const kpiFound = await ImpactoKPIKaizen.findOne({ name: kpiImpactoE });
            if (!kpiFound) return res.status(404).json({ message: `KPI ${kpiImpactoE} no encontrado` });
            newObj.kpiImpactoE = kpiFound._id;
        }

        const createdFound = await User.findOne({ username: createdBy });
        if (!createdFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        newObj.createdBy = createdFound._id;

        const estadoFound = await EstadoKaizen.findOne({ name: estadoE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });
        newObj.estadoE = estadoFound._id;

        const query = await newObj.save();

        if (query) {
            res.json({ message: "Actividad creada con éxito" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

activityController.updateOneById = async (req, res) => {
    const {
        //*********** Actividad **********/
        titulo_actividad,
        area,
        tipoMejora,
        tipoMejoraE,
        ubicacionMejora,
        ubicacionMejoraE,
        //*********** Problema **********/
        problema,
        tituloFotoProblema,
        descripcionProblema,
        causaRaizProblema,
        //*********** Contramedida **********/
        contramedida,
        descripcionContramedida,
        tituloFotoContramedida,
        //*********** Resultados **********/
        resultados,
        indicadores_cualitativos,
        titulo_indicadores_cuantitativos,
        descripcionResultados,
        proximas_actividades,
        titular,
        kpiImpacto,
        kpiImpactoE,
        //*********** General **********/
        sucursal,
        sucursalE,
        estado,
        estadoE,
        observaciones_generales,
        aprobadoBy,
        fechaBorrador,
        isProceso,
        fechaProceso,
        isObservado,
        fechaObservado,
        isAprobado,
        fechaAprobado,
    } = req.body;
    const { itemId } = req.params;
    const { evidenciaProblema, flujogramaProblema, graficoProblema, avatarContramedida, flujogramaContramedida, indicadores_cuantitativos, anexos } =
        req.files;

    console.log("Adjuntos:", anexos);

    let flujoProblema = null;
    let grafiProblema = null;
    let flujoContramedida = null;
    let areaNull = null;
    let sucursalNull = null;
    let tipoMejoraNull = null;
    let ubicacionMejoraNull = null;
    let kpiImpactoNull = null;
    let query = null;

    try {
        if (area == null || area == undefined) {
            areaNull = null;
        } else {
            const areaFound = await Area.findOne({ name: area });
            if (!areaFound) return res.status(404).json({ message: `Area ${area} no encontrada` });
            areaNull = areaFound._id;
        }

        if (sucursalE == null || sucursalE == undefined) {
            sucursalNull = null;
        } else {
            const sucursalFound = await Sucursal.findOne({ name: sucursalE });
            if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
            sucursalNull = sucursalFound._id;
        }

        if (tipoMejoraE == null || tipoMejoraE == undefined) {
            tipoMejoraNull = null;
        } else {
            const tipoMejoraFound = await TipoMejoraKaizen.findOne({ abreviatura: tipoMejoraE });
            if (!tipoMejoraFound) return res.status(404).json({ message: `Tipo de Mejora ${tipoMejoraE} no encontrada` });
            tipoMejoraNull = tipoMejoraFound._id;
        }

        if (ubicacionMejoraE == null || ubicacionMejoraE == undefined) {
            ubicacionMejoraNull = null;
        } else {
            const ubicacionMejoraFound = await UbicacionMejoraKaizen.findOne({ name: ubicacionMejoraE });
            if (!ubicacionMejoraFound) return res.status(404).json({ message: `Ubicación mejora ${ubicacionMejoraE} no encontrada` });
            ubicacionMejoraNull = ubicacionMejoraFound._id;
        }

        if (kpiImpactoE == null || kpiImpactoE == undefined) {
            kpiImpactoNull = null;
        } else {
            const kpiFound = await ImpactoKPIKaizen.findOne({ name: kpiImpactoE });
            if (!kpiFound) return res.status(404).json({ message: `KPI ${kpiImpactoE} no encontrado` });
            kpiImpactoNull = kpiFound._id;
        }

        if (flujogramaProblema == null || flujogramaProblema == undefined) {
            flujoProblema = "";
        } else {
            flujoProblema = flujogramaProblema[0].location;
        }

        if (graficoProblema == null || graficoProblema == undefined) {
            grafiProblema = "";
        } else {
            grafiProblema = graficoProblema[0].location;
        }

        if (flujogramaContramedida == null || flujogramaContramedida == undefined) {
            flujoContramedida = "";
        } else {
            flujoContramedida = flujogramaContramedida[0].location;
        }

        const evidenciaExiste = await ActividadKaizen.findById(itemId)
        // console.log(evidenciaExiste.evidenciaProblema);

        const estadoFound = await EstadoKaizen.findOne({ name: estadoE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });

        if (estadoE == "BORRADOR") {
            query = await ActividadKaizen.findByIdAndUpdate(itemId, {
                titulo_actividad,
                area: areaNull,
                tipoMejora,
                tipoMejoraE: tipoMejoraNull,
                ubicacionMejora,
                ubicacionMejoraE: ubicacionMejoraNull,
                sucursal,
                sucursalE: sucursalNull,
                // Problema
                problema,
                tituloFotoProblema,
                descripcionProblema,
                evidenciaProblema: evidenciaProblema == (null || undefined) ? evidenciaExiste.evidenciaProblema : evidenciaProblema[0].location,
                flujogramaProblema: flujogramaProblema == (null || undefined) ? evidenciaExiste.flujogramaProblema : flujoProblema,
                graficoProblema: graficoProblema == (null || undefined) ? evidenciaExiste.graficoProblema : grafiProblema,
                causaRaizProblema,
                // Contramedida
                contramedida,
                tituloFotoContramedida,
                descripcionContramedida,
                avatarContramedida: avatarContramedida == (null || undefined) ? evidenciaExiste.avatarContramedida : avatarContramedida[0].location,
                flujoContramedida: flujogramaContramedida == (null || undefined) ? evidenciaExiste.flujogramaContramedida : flujoContramedida,
                // Resultados
                resultados,
                indicadores_cualitativos,
                titulo_indicadores_cuantitativos,
                indicadores_cuantitativos: indicadores_cuantitativos == (null || undefined) ? evidenciaExiste.indicadores_cuantitativos : indicadores_cuantitativos[0].location,
                descripcionResultados,
                kpiImpacto,
                kpiImpactoE: kpiImpactoNull,
                proximas_actividades,
                titular,
                anexos: anexos == (null || undefined) ? evidenciaExiste.anexos : anexos.map((a) => a.location),
                fechaBorrador,
            });
        } else if (estadoE == "EN PROCESO") {
            query = await ActividadKaizen.findByIdAndUpdate(itemId, {
                isProceso,
                fechaProceso,
                estado,
                observaciones_generales,
                estadoE: estadoFound._id,
            });
        } else if (estadoE == "POR MEJORAR") {
            query = await ActividadKaizen.findByIdAndUpdate(itemId, {
                isObservado,
                fechaObservado,
                observaciones_generales,
                estado,
                estadoE: estadoFound._id,
            });
        } else if (estadoE == "APROBADO") {
            const userFound = await User.findOne({ username: aprobadoBy });
            if (!userFound) return res.status(404).json({ message: `Aprobador ${aprobadoBy} no encontrado` });

            query = await ActividadKaizen.findByIdAndUpdate(itemId, {
                aprobadoBy: userFound._id,
                isAprobado,
                fechaAprobado,
                observaciones_generales,
                estado,
                estadoE: estadoFound._id,
            });
        }

        if (query) {
            res.json({ message: `Actividad actualizada con éxito` });
        } else {
            return res.status(404).json({ message: `Actividad ${itemId} no encontrada` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

activityController.updateEvidencesById = async (req, res) => {};

activityController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await ActividadKaizen.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: `Actividad ${itemId} eliminada con éxito` });
        } else {
            return res.status(404).json({ message: `Actividad ${itemId} no encontrada` });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
};

export default activityController;
