import AccesorioE from '../models/AccesorioE';
import ModeloTasaciones from '../models/ModeloTasaciones'
import User from '../models/User';

const accesorioController = {};

accesorioController.getAll = async (req, res) => {
    try {
        const query = await AccesorioE.find()
        .sort({ name: 1})
        .populate({
            path: 'model',
            select: 'name avatar marca',
            populate: {
                path: 'marca',
                select: 'name avatar'
            }
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if(query.length > 0){
            res.json({total: query.length, all: query});
        }else{
            return res.status(404).json({message: 'No existen accesorios creados'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

accesorioController.getOne = async (req, res) => {
    const { accesorioId} = req.params;

    try {
        const query = await AccesorioE.findById(accesorioId)
        .populate({
            path: 'model',
            select: 'name avatar marca',
            populate: {
                path: 'marca',
                select: 'name avatar'
            }
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if(query){
            res.json({one: query});
        }else{
            return res.status(404).json({message: `No existe accesorio ${accesorioId}`});
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

accesorioController.getAllActivos = async (req, res) => {
    try {
        const query = await AccesorioE.find({estado: true})
        .sort({name: 1})
        .populate({
            path: 'model',
            select: 'name avatar marca',
            populate: {
                path: 'marca',
                select: 'name avatar'
            }
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No hay accesorios activos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

accesorioController.createOne = async (req, res) => {
    const { cod_interno, name, model, precio, estado, createdBy} = req.body;
    try {
        const obj = new AccesorioE({ cod_interno, name, precio, estado });

        const modelFound = await ModeloTasaciones.findOne({name: model});
        if(!modelFound) return res.status(404).json({message: `Modelo ${model} no encontrado`});
        obj.model = modelFound._id;
        
        const userFound = await User.findOne({username: createdBy});
        if(!userFound) return res.status(404).json({message: `Usuario ${createdBy} no encontrado`});
        obj.createdBy = userFound._id;

        const query = await obj.save();
        if(query){
            res.json({message: 'Accesorio creado con éxito'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

accesorioController.updateById = async (req, res) => {
    const {accesorioId} = req.params;
    const { cod_interno, name, model, precio, estado } = req.body;
    
    try {

        const modelFound = await ModeloTasaciones.findOne({name: model});
        if(!modelFound) return res.status(404).json({message: `Modelo ${model} no encontrado`});

        const query = await AccesorioE.findByIdAndUpdate(accesorioId, {
            cod_interno, 
            name, 
            model: modelFound._id,
            precio, 
            estado
        });

        if (query) {
            res.json({ message: 'Accesorio actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe accesorio a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

accesorioController.deleteById = async (req, res) => {
    const {accesorioId} = req.params;
    try {
        const query = await AccesorioE.findByIdAndDelete(accesorioId);
        if (query) {
            res.json({ message: 'Accesorio eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe accesorio a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

accesorioController.getAccesoriosByModelo = async (req, res) => {
    const { modelo } = req.body;

    try {
        const modelFound = await ModeloTasaciones.findOne({name: modelo});

        const query = await AccesorioE.find({
            model: modelFound._id
        })
        .sort({ cod_interno: 1})
        .populate({
            path: 'model',
            select: 'name'
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        })

        if(query.length > 0){
            res.json({total: query.length, all: query});
        }else{
            return res.status(404).json({message: `No se encontraron accesorios para ${modelo}`});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

export default accesorioController;