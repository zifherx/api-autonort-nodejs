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
        descripcionProblema,
        causaRaizProblema,
        //*********** Problema **********/
        //*********** Contramedida **********/
        contramedida,
        descripcionContramedida,
        //*********** Contramedida **********/
        //*********** Resultados **********/
        resultados,
        descripcionResultados,
        resultado_Antes,
        resultado_Ahora,
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
    const { graficoProblema, graficoContramedida, graficoResultados, anexos } = req.files;

    let grafProblema = null;
    let grafContramedida = null;
    let grafResultados = null;
    let anexosNull = null;

    try {
        if (graficoProblema == null || graficoProblema == undefined) {
            grafProblema = "";
        } else {
            grafProblema = graficoProblema[0].location;
        }
        if (graficoContramedida == null || graficoContramedida == undefined) {
            grafContramedida = "";
        } else {
            grafContramedida = graficoContramedida[0].location;
        }
        if (graficoResultados == null || graficoResultados == undefined) {
            grafResultados = "";
        } else {
            grafResultados = graficoResultados[0].location;
        }

        // console.log("Problema", grafProblema);
        // console.log("Contramedida", grafContramedida);
        // console.log("Resultado", grafResultados);
        // console.log("Anexos", anexos == (null || undefined) ? [] : anexos.map((a) => a.location));
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
            descripcionProblema,
            graficoProblema: grafProblema,
            causaRaizProblema,
            // Contramedida
            contramedida,
            descripcionContramedida,
            graficoContramedida: grafContramedida,
            // Resultados
            resultados,
            descripcionResultados,
            resultado_Antes,
            resultado_Ahora,
            graficoResultados: grafResultados,
            kpiImpacto,
            // Anexos
            proximas_actividades,
            titular,
            anexos: anexos == (null || undefined) ? [] : anexos.map((a) => a.location),
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
        descripcionProblema,
        causaRaizProblema,
        //*********** Contramedida **********/
        contramedida,
        descripcionContramedida,
        //*********** Resultados **********/
        resultados,
        descripcionResultados,
        resultado_Antes,
        resultado_Ahora,
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
    const { graficoProblema, graficoContramedida, graficoResultados, anexos } = req.files;

    // console.log("Adjuntos:", anexos);
    // console.log(req.params);
    // console.log(req.body);

    let grafiProblema = null;
    let grafiContramedida = null;
    let grafiResultados = null;
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

        if (graficoProblema == null || graficoProblema == undefined) {
            grafiProblema = "";
        } else {
            grafiProblema = graficoProblema[0].location;
        }

        if (graficoContramedida == null || graficoContramedida == undefined) {
            grafiContramedida = "";
        } else {
            grafiContramedida = graficoContramedida[0].location;
        }

        if (graficoResultados == null || graficoResultados == undefined) {
            grafiResultados = "";
        } else {
            grafiResultados = graficoResultados[0].location;
        }

        const evidenciaExiste = await ActividadKaizen.findById(itemId);
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
                descripcionProblema,
                graficoProblema: graficoProblema == (null || undefined) ? evidenciaExiste.graficoProblema : grafiProblema,
                causaRaizProblema,
                // Contramedida
                contramedida,
                descripcionContramedida,
                graficoContramedida: graficoContramedida == (null || undefined) ? evidenciaExiste.graficoContramedida : grafiContramedida,
                // Resultados
                resultados,
                descripcionResultados,
                graficoResultados: graficoResultados == (null || undefined) ? evidenciaExiste.graficoResultados : grafiResultados,
                resultado_Antes,
                resultado_Ahora,
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

        // console.log("Estado:", estadoFound);
        // console.log("Q:", query);

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

activityController.sendActivityToEvaluate = async (req, res) => {
    const { estado, estadoE, isProceso, fechaProceso } = req.body;
    const { itemId } = req.params;

    try {
        const estadoFound = await EstadoKaizen.findOne({ name: estadoE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });

        const query = await ActividadKaizen.findByIdAndUpdate(itemId, {
            sendToEvaluate: true,
            estado,
            estadoE: estadoFound._id,
            isProceso,
            fechaProceso,
        });
        if (query) {
            res.json({ message: `Actividad enviada a evaluación con éxito` });
        } else {
            return res.status(404).json({ message: `Actividad ${itemId} no encontrada` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

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
