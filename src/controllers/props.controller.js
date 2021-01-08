import Props from '../models/Props'

export const createProp = async(req, res) => {
    try {
        const { name, type, forCar, cantidad, precio } = req.body;
        const newProp = new Props({ name, type, forCar, cantidad, precio });
        const propSaved = await newProp.save();
        res.status(201).json(propSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getProps = async(req, res) => {
    try {
        const props = await Props.find();
        if (props) {
            res.status(200).json(props);
        } else {
            res.status(201).json({ messsage: 'No existen campañas a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getPropById = async(req, res) => {
    try {
        const { propsId } = req.params;
        const props = await Props.findById(propsId);
        if (props) {
            res.status(200).json(props);
        } else {
            res.status(201).json({ messsage: 'No existe campaña a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const updatePropById = async(req, res) => {
    try {
        const { propsId } = req.params;
        const updateProp = await Props.findByIdAndUpdate(propsId, req.body, { new: true });
        if (updateProp) {
            res.status(200).json(updateProp);
        } else {
            res.status(401).json({ messsage: 'No existe campaña a actualizar' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const deletePropById = async(req, res) => {
    try {
        const { propsId } = req.params;
        const deletedProp = await Props.findByIdAndDelete(propsId);
        if (deletedProp) {
            res.status(200).json({ messsage: 'Accesorio Eliminado' });
        } else {
            res.status(401).json({ messsage: 'Accesorio no Existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}