import ActividadKaizen from "../models/ActividadKaizen";
import Area from "../models/Area";
import Sucursal from "../models/Sucursal";
import User from "../models/User";
import EstadoKaizen from "../models/EstadoKaizen";

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
        cod_interno,
        titulo_actividad,
        area,
        problema,
        tituloFotoProblema,
        descripcionProblema,
        contramedida,
        descripcionContramedida,
        tituloFotoContramedida,
        resultados,
        indicadores_cualitativos,
        titulo_indicadores_cuantitativos,
        descripcionResultados,
        proximas_actividades,
        titular,
        createdBy,
        estado,
        estadoE,
        concesionario,
        sucursal,
        sucursalE,
        fechaIngreso,
        responsable,
        fechaProceso,
    } = req.body;
    const { evidenciaProblema, flujogramaProblema, graficoProblema, avatarContramedida, flujogramaContramedida, indicadores_cuantitativos, anexos } = req.files;
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
        // console.log("Flujo:", flujoProblema);
        // console.log("Grafi:", grafiProblema);

        const newObj = new ActividadKaizen({
            cod_interno,
            titulo_actividad,
            concesionario,
            sucursal,
            fechaIngreso,
            // Problema
            problema,
            tituloFotoProblema,
            descripcionProblema,
            evidenciaProblema: evidenciaProblema[0].location,
            flujogramaProblema: flujoProblema,
            graficoProblema: grafiProblema,
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
            // General
            estado,
            responsable,
            fechaProceso
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
    const {estado, estadoE, observaciones_generales, aprobadoBy, fechaProceso, isObservado, fechaObservado, isAprobado, fechaAprobado } = req.body;
    const { itemId } = req.params;
    let query = null;

    try {

        const estadoFound = await EstadoKaizen.findOne({name: estadoE});
        if(!estadoFound) return res.status(404).json({message: `Estado ${estadoE} no encontrado`});

        
        if(estadoE == 'EN PROCESO'){
            query = await ActividadKaizen.findByIdAndUpdate(itemId,{
                fechaProceso,
                estado,
                observaciones_generales,
                estadoE: estadoFound._id,
            });
        }else if(estadoE == 'POR MEJORAR'){
            query = await ActividadKaizen.findByIdAndUpdate(itemId,{
                isObservado, 
                fechaObservado,
                observaciones_generales,
                estado,
                estadoE: estadoFound._id,
            });
        }else if(estadoE == 'APROBADO'){
            const userFound = await User.findOne({username: aprobadoBy});
            if(!userFound) return res.status(404).json({message: `Aprobador ${aprobadoBy} no encontrado`});
            
            query = await ActividadKaizen.findByIdAndUpdate(itemId,{
                aprobadoBy: userFound._id,
                isAprobado, 
                fechaAprobado,
                observaciones_generales,
                estado,
                estadoE: estadoFound._id,
            });
        }

        if(query){
            res.json({message: `Actividad actualizada con éxito`});
        }else{
            return res.status(404).json({message: `Actividad ${itemId} no encontrada`});
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};

activityController.updateEvidencesByID = async (req, res) => {

}

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
