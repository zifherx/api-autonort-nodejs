import Role from "../models/Role";
import SubmoduloG from "../models/SubmoduloG";
import TypePermission from "../models/TypePermission";
import ViewAuthorization from "../models/ViewAuthorization";


const controller = {
    getAll : async(req, res) => {
        try {
            const query = await ViewAuthorization.find()
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
            .populate({
                path: 'typePermissionE',
                select: 'name icon hex'
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
    },
    
    findBySubmodule : async (req, res) => {
        const {submodulo} = req.body;
        try {
    
            const submoduloFound = await SubmoduloG.findOne({name: submodulo});
            // console.log(submoduloFound);
            if(!submoduloFound) return res.status(404).json({message: `Submódulo ${submodulo} no encontrado`}) 
    
            const query = await ViewAuthorization.findOne({submoduloG: submoduloFound._id})
            .populate({
                path: 'submoduloG',
                select: 'name'
            })
            .populate({
                path: 'rolesPermitidos',
                select: 'name descripcion'
            })
            .populate({
                path: 'typePermissionE',
                select: 'name icon hex'
            })
    
            if(query){
                res.json({total: query.length, one: query});
            }else{
                return res.status(404).json({message: 'No existen permisos'});
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({message: err.message});   
        }
    },
    
    findByCodigo : async (req, res) => {
        const {codigo} = req.body;

        try {
    
            const query = await ViewAuthorization.findOne({cod_interno: codigo})
            .populate({
                path: 'submoduloG',
                select: 'name'
            })
            .populate({
                path: 'rolesPermitidos',
                select: 'name descripcion'
            })
            .populate({
                path: 'typePermissionE',
                select: 'name icon hex'
            })
    
            if(!query)return res.status(404).json({message: `No existe permiso ${codigo}`});
            res.json({one: query});
        } catch (err) {
            console.log(err);
            return res.status(503).json({message: err.message});   
        }
    },
    
    createOne : async(req, res) => {
        const {cod_interno,typePermission, typePermissionE, submoduloG, rolesPermitidos,estado} = req.body;
    
        try {
            const obj = new ViewAuthorization({ cod_interno,typePermission,estado});
    
            if(submoduloG == null || submoduloG == undefined || submoduloG== ''){
                obj.submoduloG = null;

            }else{
                const submoduleFound = await SubmoduloG.findOne({name: submoduloG});
                if(!submoduleFound) return res.status(404).json({message: `Submódulo ${submoduloG} no encontrado`});
                obj.submoduloG = submoduleFound._id;
            }

            const tipoFound = await TypePermission.findOne({name: typePermissionE});
            if(!tipoFound) return res.status(404).json({message: `Tipo ${typePermissionE} no encontrado`});
            obj.typePermissionE = tipoFound._id;
    
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
    },
    
    updateOneById : async(req, res) => {
        const {cod_interno, typePermission, typePermissionE,  submoduloG, rolesPermitidos,estado} = req.body;
        const {itemId} = req.params;
        let submoduloGNull;

        try {
            
            if(submoduloG == null || submoduloG == undefined || submoduloG == ''){
                submoduloGNull = null;
            }else{
                const subModuleFound = await SubmoduloG.findOne({name: submoduloG});
                if(!subModuleFound) return res.status(404).json({message: `Submódulo ${submoduloG} no encontrado`})
                submoduloGNull = subModuleFound._id;
            }

            const roleFound = await Role.find({name: {$in: rolesPermitidos}});
            if(!roleFound) return res.status(404).json({message: `No se encontró el rol ${rolesPermitidos}`});
    
            const tipoFound = await TypePermission.findOne({name: typePermissionE});
            if(!tipoFound) return res.status(404).json({message: `Tipo ${typePermissionE} no encontrado`})

            
            const query = await ViewAuthorization.findByIdAndUpdate(itemId,{
                cod_interno,
                typePermission,
                typePermissionE: tipoFound._id,
                submoduloG: submoduloGNull,
                estado,
                rolesPermitidos: roleFound.map(a => a._id)
            });
    
            if(!query) return res.status(404).json({message: `No existe permiso ${itemId} a actualizar`});
            res.json({message: 'Permiso actualizado con éxito'});
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message })
        }
    },
    
    deleteOneById : async(req, res) => {
        const {itemId} = req.params;
    
        try {
            const query = await ViewAuthorization.findByIdAndDelete(itemId);
    
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
}

export default controller;