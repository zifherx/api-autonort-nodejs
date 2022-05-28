import { query } from "express";
import ModuloG from "../models/ModuloG";
import SubmoduloG from "../models/SubmoduloG";

const submoduloController = {};

submoduloController.getAll = async(req, res) => {
    try {
        const query = await SubmoduloG.find()
        .sort({ name: 1 })
        .populate({
            path: 'moduloG',
            select: 'name menuG icon',
            populate: {
                path: 'menuG',
                select: 'name icon'
            }
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen submódulos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

submoduloController.getOneById = async(req, res) => {
    const { subModuloId } = req.params;
    try {
        const query = await SubmoduloG.findById(subModuloId)
        .populate({
            path: 'moduloG',
            select: 'name menuG icon',
            populate: {
                path: 'menuG',
                select: 'name icon'
            }
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe submódulo' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

submoduloController.getAllByActivos = async(req, res) => {
    try {
        const query = await SubmoduloG.find({ estado: true })
        .sort({ name: 1 })
        .populate({
            path: 'moduloG',
            select: 'name menuG icon',
            populate: {
                path: 'menuG',
                select: 'name icon'
            }
        });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen submódulos activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

submoduloController.createOne = async(req, res) => {
    const { moduloG, name, estado } = req.body;
    try {
        const obj = new SubmoduloG({ name, estado });

        const moduloFound = await ModuloG.findOne({name: moduloG});
        if(!moduloFound) return res.status(404).json({message: `No se encontró módulo ${moduloG}`})
        obj.moduloG = moduloFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Submódulo creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

submoduloController.updateOneById = async(req, res) => {
    const { moduloG, name, estado } = req.body;
    const { subModuloId } = req.params;
    try {
        const moduloFound = await ModuloG.findOne({name: moduloG});
        if(!moduloFound) return res.status(404).json({message: `No se encontró módulo ${moduloG}`})
        
        const query = await SubmoduloG.findByIdAndUpdate(subModuloId, { 
                moduloG: moduloFound._id,
                name,
                estado 
            });

        if (query) {
            res.json({ message: 'Submódulo actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe submódulo a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

submoduloController.deleteOneById = async(req, res) => {
    const { subModuloId } = req.params;
    try {
        const query = await SubmoduloG.findByIdAndDelete(subModuloId);
        if (query) {
            res.json({ message: 'Submódulo eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe submódulo a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

submoduloController.getAllActiveByModulo = async(req, res) => {
    const {moduloG} = req.body;

    try {
        const moduloFound = await ModuloG.findOne({name: moduloG });
        if(!moduloFound) return res.status(404).json({message: `Módulo ${moduloG} no encontrado`});

        const query = await SubmoduloG.find({
            moduloG: moduloFound._id,
            estado: true
        })
        .sort({ name: 1 })
        .populate({
            path: 'moduloG',
            select: 'name menuG icon',
            populate: {
                path: 'menuG',
                select: 'name icon'
            }
        });

        if(query.length > 0){
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen submódulos activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export default submoduloController;