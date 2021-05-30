import Endoso from "../models/Endoso";

export const getEndosos = async (req,res) => {
    try {
        const query = await Endoso.find().sort({name: 'asc'});
        if(query.length > 0){
            res.json(query);
        }else{
            return res.status(404).json({message: 'No existen Endosos'})
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const getEndosoByActivo = async (req,res) => {
    try {
        const query = await Endoso.find({status: 'Activo'}).sort({name: 'asc'});
        if(query.length > 0){
            res.json(query)
        }else{
            return res.status(404).json({message: 'No existen Endosos Activos'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const getEndosoById = async (req,res) => {
    const {endosoId} = req.params;
    try {
        const query = await Endoso.findById(endosoId);
        if(query){
            res.json(query);
        }else{
            return res.status(404).json({message: 'No existe el Endoso'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const createEndoso = async (req,res) => {
    const { name, status} = req.body;
    
    try {
        const newObj = new Endoso( { name, status});
        const query = await newObj.save();
        if(query){
            res.json({message: 'Endoso creado con éxito'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const updateEndoso = async (req,res) => {
    const { name, status} = req.body;
    const { endosoId } = req.params;
    try {
        const newObj = await Endoso.findByIdAndUpdate(endosoId, {name, status});
        if(newObj){
            res.json({message: 'Endoso actualizado con éxito'});
        }else{
            return res.json(404).json({message: 'No existe Endoso a actualizar'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
    
}

export const deleteEndoso = async (req,res) => {
    const { endosoId } = req.params;
    try {
        const newObj = await Endoso.findByIdAndDelete(endosoId);
        if(newObj){
            res.json({message: 'Endoso eliminado con éxito'});
        }else{
            return res.json(404).json({message: 'No existe Endoso a eliminar'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}