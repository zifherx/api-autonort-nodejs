import Props from '../models/Props'

export const createProp = async(req, res) => {
    try {
        const { name, forCar, stock, precio, status } = req.body;
        const newProp = new Props({ name, forCar, stock, precio, status });

        const propSaved = await newProp.save();
        if (propSaved) {
            res.json({ message: 'Accesorio creado con éxito' });
        }

    } catch (e) {
        console.log(e);
        res.status(404).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getAll = async(req, res) => {
    try {
        const props = await Props.find();
        if (props) {
            res.json(props);
        } else {
            res.status(201).json({ messsage: 'No existen campañas a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getAccesoriosActivos = async(req, res) => {
    try {
        const activos = await Props.find({ status: 'Activo' });
        if (activos) {
            res.json(activos);
        }
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getAccesorioById = async(req, res) => {
    try {
        const { propsId } = req.params;
        const props = await Props.findById(propsId);
        if (props) {
            res.json(props);
        } else {
            res.status(201).json({ messsage: 'No existe campaña a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getAccesorioByAuto = async(req, res) => {
    try {
        const { modelo } = req.body;
        const foundProp = await Props.find({ forCar: modelo });

        if (foundProp) {
            res.json(foundProp);
        } else {
            res.status(201).json({ message: 'No existe el accesorio' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: 'Error filtrando Campañas' });
    }
}

export const updatePropById = async(req, res) => {
    try {
        const { propsId } = req.params;

        const { name, forCar, stock, precio, status } = req.body;

        //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

        const updateProp = await Props.findByIdAndUpdate(propsId, { name, forCar, stock, precio, status }, { new: true });
        if (updateProp) {
            res.json({ message: 'Accesorio actualizado con éxito' });
        } else {
            return res.status(201).json({ messsage: 'No existe campaña a actualizar' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const deletePropById = async(req, res) => {
    try {
        const { propsId } = req.params;
        const deletedProp = await Props.findByIdAndDelete(propsId);
        if (deletedProp) {
            res.json({ message: 'Accesorio eliminado con éxito' });
        } else {
            res.status(201).json({ messsage: 'Accesorio no Existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}