import Props from '../models/Props'
import Vehicle from '../models/Vehicle';

export const createProp = async(req, res) => {
    try {
        const { name, type, cantidad, precio, auto } = req.body;
        const newProp = new Props({ name, type, cantidad, precio });

        const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });
        newProp.auto = foundAuto.map(auto => auto._id);
        const propSaved = await newProp.save();
        res.status(201).json(propSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const getProps = async(req, res) => {
    try {
        const props = await Props.find().populate('auto');
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
        const props = await Props.findById(propsId).populate('auto');
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

export const getPropsByVehicle = async(req, res) => {
    try {
        const { modelo } = req.body;
        const vehiculo = await Vehicle.findOne({ cod_tdp: modelo });
        const foundProp = await Props.find({ auto: vehiculo });

        if (foundProp) {
            res.status(200).json(foundProp);
        } else {
            res.status(201).json({ message: 'No existe el accesorio' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error filtrando Campañas' });
    }
}

export const updatePropById = async(req, res) => {
    try {
        const { propsId } = req.params;

        const { name, type, cantidad, precio, auto } = req.body;

        const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

        const updateProp = await Props.findByIdAndUpdate(propsId, { name, type, cantidad, precio, auto: foundAuto.map(auto => auto._id) }, { new: true });
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