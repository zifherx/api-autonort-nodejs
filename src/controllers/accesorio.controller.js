import Accesorio from '../models/Accesorio';
import User from '../models/User';

const ctrlAccesorio = {};

ctrlAccesorio.getAll = async (req, res) => {
    try {
        const query = await Accesorio.find()
        .sort({ name: 1})
        .populate({
            path: 'createdBy',
            select: 'name username roles',
            populate: {
                path: 'roles',
                select: 'name'
            }
        });
        if(query.length > 0){
            res.json({total: query.length, props: query});
        }else{
            return res.status(404).json({message: 'No existen Accesorios'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

ctrlAccesorio.getOne = async (req, res) => {
    const { accesorioId} = req.params;
    try {
        const query = await Accesorio
        .findById(accesorioId)
        .populate({
            path: 'createdBy',
            select: 'name username roles',
            populate: {
                path: 'roles',
                select: 'name'
            }
        });
        if(query){
            res.json(query);
        }else{
            return res.status(404).json({message: 'No existe Accesorio'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

ctrlAccesorio.getActivos = async (req, res) => {
    try {
        const query = await Accesorio.find({status: true})
        .sort({name: 1})
        .populate({
            path: 'createdBy',
            select: 'name username roles',
            populate: {
                path: 'roles',
                select: 'name'
            }
        });
        if (query.length > 0) {
            res.json({total: query.length, props: query});
        } else {
            return res.status(404).json({ message: 'No hay Accesorios Activos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

ctrlAccesorio.createOne = async (req, res) => {
    const { codigo, categoria, nombre, descripcion, stock, status, createdBy} = req.body;
    try {
        const obj = new Accesorio({ codigo, categoria, nombre, descripcion, stock, status });

        const userFound = await User.find({username: {$in: createdBy}});
        obj.createdBy = userFound.map(a => a._id);

        const query = await obj.save();
        if(query){
            res.json({message: 'Accesorio creado con éxito'});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

ctrlAccesorio.updateById = async (req, res) => {
    const {accesorioId} = req.params;
    const { categoria, nombre, descripcion, stock, status } = req.body;
    try {
        const query = await Accesorio.findByIdAndUpdate(accesorioId, {
            categoria, nombre, descripcion, stock, status
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

ctrlAccesorio.deleteById = async (req, res) => {
    const {accesorioId} = req.params;
    try {
        const query = await Accesorio.findByIdAndDelete(accesorioId);
        if (query) {
            res.json({ message: 'Accesorio eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe accesorio a eliminado' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({message: err.message});
    }
}

export default ctrlAccesorio;