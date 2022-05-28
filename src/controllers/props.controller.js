import Props from '../models/Props'
import User from '../models/User'

export const createProp = async(req, res) => {
    const { name, forCar, stock, precio, status, empleado } = req.body;
    try {
        const newProp = new Props({ name, forCar, stock, precio, status });

        const foundEmployee = await User.find({ username: { $in: empleado } });
        newProp.empleado = foundEmployee.map(em => em._id);

        const propSaved = await newProp.save();
        if (propSaved) {
            res.json({ message: 'Accesorio creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getAll = async(req, res) => {
    try {
        const props = await Props.find().sort({ names: 'asc' });
        if (props.length > 0) {
            res.json(props);
        } else {
            res.status(404).json({ message: 'No existen Accesorios' });
        }
    } catch (err) {
        console.log(err);
        return res.status(409).json({ message: err.message })
    }
}

export const getAccesoriosActivos = async(req, res) => {
    try {
        const query = await Props.find({ status: 'Activo' }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active:query});
        } else {
            return res.status(404).json({ message: 'No existe accesorios activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(409).json({ message: err.message })
    }
}

export const getAccesorioById = async(req, res) => {
    const { propsId } = req.params;
    try {
        const props = await Props.findById(propsId);
        if (props) {
            res.json(props);
        } else {
            return res.status(404).json({ messsage: 'No existe Accesorio' });
        }
    } catch (err) {
        console.log(err);
        return res.status(409).json({ message: err.message })
    }
}

export const getAccesorioByAuto = async(req, res) => {
    const { modelo } = req.body;
    try {
        const query = await Props.find({ forCar: modelo });

        if (query.length > 0) {
            res.json({total: query.length,all: query});
        } else {
            return res.status(404).json({ message: 'No existe el accesorio' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updatePropById = async(req, res) => {
    const { propsId } = req.params;
    const { name, forCar, stock, precio, status } = req.body;

    try {
        //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

        const updateProp = await Props.findByIdAndUpdate(propsId, { name, forCar, stock, precio, status });
        if (updateProp) {
            res.json({ message: 'Accesorio actualizado con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe Accesorio a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(409).json({ message: err.message })
    }
}

export const deletePropById = async(req, res) => {
    const { propsId } = req.params;
    try {
        const deletedProp = await Props.findByIdAndDelete(propsId);
        if (deletedProp) {
            res.json({ message: 'Accesorio eliminado con éxito' });
        } else {
            res.status(404).json({ messsage: 'No existe Accesorio a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(409).json({ message: err.message })
    }
}