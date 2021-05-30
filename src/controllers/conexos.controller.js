import Conexos from "../models/Conexos";

export const getConexos = async (req,res) => {
    try {
        const query = await Conexos.find().sort({name: 'asc'});
        if(query.length > 0){
            res.json(query);
        }else{
            return res.status(404).json({message: 'No existen Asesores de Conexos'})
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const getConexoByActivo = async (req,res) => {
    try {
        const query = await Conexos.find({status: 'Activo'}).sort({name: 'asc'});
        if(query.length > 0){
            res.json(query)
        }else{
            return res.status(404).json({message: 'No existen Asesores Activos'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const getConexoById = async (req,res) => {
    const {conexoId} = req.params;
    try {
        const query = await Conexos.findById(conexoId);
        if(query){
            res.json(query);
        }else{
            return res.status(404).json({message: 'No existe el Asesor'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const createConexo = async (req,res) => {
    const { name, status} = req.body;
    
    try {
        const newObj = new Conexos( { name, status});
        const query = await newObj.save();
        if(query){
            res.json({message: 'Asesor creado con éxito'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}

export const updateConexo = async (req,res) => {
    const { name, status} = req.body;
    const { conexoId } = req.params;
    try {
        const newObj = await Conexos.findByIdAndUpdate(conexoId, {name, status});
        if(newObj){
            res.json({message: 'Asesor actualizado con éxito'});
        }else{
            return res.json(404).json({message: 'No existe Asesor a actualizar'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
    
}

export const deleteConexo = async (req,res) => {
    const { conexoId } = req.params;
    try {
        const newObj = await Conexos.findByIdAndDelete(conexoId);
        if(newObj){
            res.json({message: 'Asesor eliminado con éxito'});
        }else{
            return res.json(404).json({message: 'No existe Asesor a eliminar'});
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({message: err.message});
    }
}