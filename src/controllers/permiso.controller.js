import Permiso from '../models/Permiso';
import Role from '../models/Role';
import SubmoduloG from '../models/SubmoduloG';

const permisoController = {};

permisoController.getAll = async(req, res) => {
    try {
        const query = await Permiso.find()
        .sort({cod_interno: 1})
        .populate({
            path: 'submoduloG',
            select: 'name estado moduloG',
            populate: {
                path: 'moduloG',
                select: 'name icon menuG',
                populate: {
                    path: 'menuG',
                    select: 'name icon'
                }
            }
        })
        .populate({
            path: 'rolesPermitidos',
            select: 'name descripcion'
        })

        if(query.length > 0){
            res.json({total: query.length, all: query});
        }else{
            return res.status(404).json({message: 'No existen permisos'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});    
    }
}

permisoController.findBySubmodule = async (req, res) => {
    const {submodulo} = req.body;
    try {

        const submoduloFound = await SubmoduloG.findOne({name: submodulo});
        // console.log(submoduloFound);
        if(!submoduloFound) return res.status(404).json({message: `Submódulo ${submodulo} no encontrado`}) 

        const query = await Permiso.findOne({submoduloG: submoduloFound._id})
        .populate({
            path: 'submoduloG',
            select: 'name'
        })
        .populate({
            path: 'rolesPermitidos',
            select: 'name descripcion'
        });

        if(query){
            res.json({total: query.length, one: query});
        }else{
            return res.status(404).json({message: 'No existen permisos'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});   
    }
}

permisoController.createOne = async(req, res) => {
    const {cod_interno, submoduloG, rolesPermitidos,estado} = req.body;

    try {
        const obj = new Permiso({ cod_interno,estado});

        const submoduleFound = await SubmoduloG.findOne({name: submoduloG});
        if(!submoduleFound) return res.status(404).json({message: `Submódulo ${submoduloG} no encontrado`});
        obj.submoduloG = submoduleFound._id;

        const roleFound = await Role.find({name: {$in: rolesPermitidos}});
        if(!roleFound) return res.status(404).json({message: `Rol ${rolesPermitidos} no encontrado`});
        obj.rolesPermitidos = roleFound.map(a => a.id);

        const query = await obj.save();

        if(query){
            res.json({message: 'Permiso creado con éxito'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

permisoController.updateOneById = async(req, res) => {
    const {cod_interno, submoduloG, rolesPermitidos,estado} = req.body;
    const {permisoId} = req.params;

    try {

        const roleFound = await Role.find({name: {$in: rolesPermitidos}});
        if(!roleFound) return res.status(404).json({message: `No se encontró el rol ${rolesPermitidos}`});

        const subModuleFound = await SubmoduloG.findOne({name: submoduloG});
        if(!subModuleFound) return res.status(404).json({message: `Submódulo ${submoduloG} no encontrado`})
        
        const query = await Permiso.findByIdAndUpdate(permisoId,{
            cod_interno,
            submoduloG: subModuleFound._id,
            estado,
            rolesPermitidos: roleFound.map(a => a._id)
        });

        if(query){
            res.json({message: 'Permiso actualizado con éxito'});
        }else{
            return res.status(404).json({message: 'No existe permiso a actualizar'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

permisoController.deleteOneById = async(req, res) => {
    const {permisoId} = req.params;

    try {
        const query = await Permiso.findByIdAndDelete(permisoId);

        if(query){
            res.json({message: 'Permiso eliminado con éxito'});
        }else{
            return res.status(404).json({message: 'No existe permiso a eliminar'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default permisoController;